<template>
  <div>
    <h1>購物車列表</h1>
    <div class="container">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
            <th style="width: 150px"></th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cart.carts"
            ><!-- 判斷 購物車內是否有資料 -->
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                {{ item.product.title }}
              </td>
              <td>
                <div class="input-group input-group-sm mt-3">
                  <div class="input-group mb-3">
                    <input
                      min="1"
                      type="number"
                      @change="updateCart(item)"
                      :disabled="item.id === loadingStatus.loadingItem"
                      v-model.number="item.qty"
                      class="form-control"
                    />
                    <span class="input-group-text" id="basic-addon2">數量</span>
                  </div>
                </div>
              </td>
              <td>
                {{ item.total }}
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click.prevent="delProduct(item.id)"
                >
                  <i class="fas fa-spinner fa-pulse"></i>
                  x
                </button>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end"></td>
          </tr>
          <tr>
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success"></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="my-5 row justify-content-center">
      <Form v-slot="{ errors }" @submit="onSubmit" class="col-md-6" ref="form">
        <div class="mb-3">
          <label for="email">E-mail</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name">姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="number">聯絡方式</label>
          <Field
            id="number"
            name="聯絡方式"
            type="number"
            class="form-control"
            :class="{ 'is-invalid': errors['聯絡方式'] }"
            placeholder="請輸入聯絡方式"
            :rules="isPhone"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage
            role="alert"
            name="聯絡方式"
            class="invalid-feedback"
          ></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address">地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage
            role="alert"
            name="地址"
            class="invalid-feedback"
          ></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="textarea">留言區</label>
          <textarea
            id="textarea"
            name="留言區"
            type="textarea"
            class="form-control"
            :class="{ 'is-invalid': errors['留言區'] }"
            placeholder="請輸入留言"
            v-model="form.message"
          ></textarea>
        </div>

        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: {},
      loadingStatus: {
        loadingItem: '',
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(api)
        .then((res) => {
          this.cart = res.data.data;
        })
        .catch((res) => {
          alert('出錯了，找問題');
          console.log(res.data);
        });
    },
    delProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res);
            this.getCart();
          } else {
            alert(res.data.message);
          }
        })
        .catch((res) => {
          alert('出錯了，找問題');
          console.log(res.data);
        });
    },
    updateCart(item) {
      this.loadingStatus.loadingItem = item.id;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product.id,
        qty: item.qty,
      };
      console.log(cart, api);
      this.$http
        .put(api, { data: cart })
        .then((res) => {
          console.log(res);
          this.loadingStatus.loadingItem = '';
          this.getCart();
        })
        .catch((res) => {
          alert('出錯了，找問題');
          console.log(res.data);
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的聯絡方式';
    },
    onSubmit() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;

      this.$http.post(api, { data: order }).then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          this.$refs.form.resetForm();
          this.getCart();
        } else {
          alert(res.data.message);
        }
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
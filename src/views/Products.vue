<template>
  <div>
    <div class="products">
      <h1>產品列表</h1>
    </div>
    <userProductModal
      ref="userProductModal"
      :product="product"
      @add-cart="addCart"
    ></userProductModal>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td style="width: 200px">
            <div
              style="
                height: 100px;
                background-size: cover;
                background-position: center;
              "
              :style="{ 'background-image': `url(${item.imageUrl})` }"
            ></div>
          </td>
          <td>
            {{ item.title }}
          </td>
          <td>
            {{ item.price }}
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                type="button"
                class="btn btn-outline-secondary"
                :disabled="loadingStatus.loadingItem === item.id"
                @click="openModal(item)"
              >
                <i
                  role="status"
                  v-if="loadingStatus.loadingItem === item.id"
                  class="fas fa-spinner fa-pulse"
                ></i>
                查看更多
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                :disabled="loadingStatus.loadingItem === item.id"
                @click="addCart(item.id)"
              >
                <div
                  class="spinner-grow spinner-grow-sm"
                  role="status"
                  v-if="loadingStatus.loadingItem === item.id"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import userProductModal from '../components/Check.vue';
export default {
  name: 'Products',
  data() {
    return {
      products: [],
      loadingStatus: {
        loadingItem: '',
      },
      isLoading: false,
      product: {},
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http
        .get(api)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openModal(item) {
      this.loadingStatus.loadingItem = item.id;
      console.log(item);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${item.id}`;
      this.$http
        .get(api)
        .then((res) => {
          this.product = res.data.product;
          this.loadingStatus.loadingItem = '';
          this.$refs.userProductModal.openModal(); //用refs開啟userProductModal的openModal
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addCart(id, qty = 1) {
      this.loadingStatus.loadingItem = id;
      console.log(id);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http
        .post(api, { data: cart })
        .then((res) => {
          this.loadingStatus.loadingItem = '';
          console.log(res);
          alert('成功加入');
        })
        .catch((res) => {
          alert('出錯了，找問題');
          console.log(res.data);
        });
    },
  },
  created() {
    this.getProducts();
  },
  components: {
    userProductModal,
  },
};
</script>
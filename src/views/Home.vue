<template>
  <div>
    <div class="home">
      <h1>前台</h1>
    </div>
    <div id="nav">
      <router-link to="products">Products</router-link> |
      <router-link to="cart">Cart</router-link> |
      <router-link to="product">Product</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
};
</script>

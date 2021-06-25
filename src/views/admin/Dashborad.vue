<template>
  <h1>後台</h1>
  <div id="nav">
    <router-link to="/">back to home</router-link> |
    <router-link to="/admin/products">後台產品列表</router-link> |
    <router-link to="/admin/comfirm">確認後台訂單</router-link> |
  </div>
  <router-view></router-view>
</template>
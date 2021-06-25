import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/products",
        component: () => import("../views/Products.vue"),
      },
      {
        path: "/cart",
        component: () => import("../views/Cart.vue"),
      },
      {
        path: "/product",
        component: () => import("../views/Product.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../views/admin/Dashborad.vue"),
    children: [
      {
        path: "/",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "products",
        component: () => import("../views/admin/Products.vue"),
      },
      {
        path: "comfirm",
        component: () => import("../views/admin/Comfirm.vue"),
      },
    ],
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

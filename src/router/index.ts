import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Routes from "@/router/routes";

const routes: Array<RouteRecordRaw> = [
  {
    path: Routes.HOME,
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: Routes.LIST,
    name: "list",
    component: () => import("../views/ListView.vue"),
  },
  {
    path: Routes.CARD,
    name: "card",
    component: () => import("../views/CardView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { RouteRecordRaw } from "vue-router";

const Module = () => import("./FeedModule.vue");
const Feed = () => import("./pages/FeedPage.vue");

const moduleRoute: RouteRecordRaw = {
  path: "",
  component: Module,
  children: [
    {
      path: "",
      component: Feed,
    },
  ],
};

export const routes = moduleRoute;

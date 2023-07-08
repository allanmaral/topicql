import { RouteRecordRaw } from "vue-router";

const Module = () => import("./PostModule.vue");
const Post = () => import("./pages/PostPage.vue");

const moduleRoute: RouteRecordRaw = {
  path: "/post",
  component: Module,
  children: [
    {
      path: "",
      component: Post,
    },
  ],
};

export const routes = moduleRoute;

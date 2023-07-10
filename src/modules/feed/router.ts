import { RouteRecordRaw } from "vue-router";

const Module = () => import("./FeedModule.vue");
const Feed = () => import("./pages/FeedPage.vue");
const Topic = () => import("./pages/TopicPage.vue");

const moduleRoute: RouteRecordRaw = {
  path: "",
  component: Module,
  children: [
    {
      path: "",
      component: Feed,
    },
    {
      path: "topic/:id",
      component: Topic,
    },
  ],
};

export const routes = moduleRoute;

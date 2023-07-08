import { RouteRecordRaw, Router } from "vue-router";
import { FeedModule } from "../feed";
import { PostModule } from "../post";
import { ProfileModule } from "../profile";

const Module = () => import("./TabBarModule.vue");

const moduleRoute: RouteRecordRaw = {
  path: "/",
  component: Module,
  children: [FeedModule.routes, PostModule.routes, ProfileModule.routes],
};

export const registerRoutes = (router: Router) => {
  router.addRoute(moduleRoute);
};

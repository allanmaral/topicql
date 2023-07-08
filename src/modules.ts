import { Router } from "vue-router";

import { router } from "./routes";

type RegisterRoutesFn = (router: Router) => void;

export interface Module {
  registerRoutes?: RegisterRoutesFn;
}

export function registerModules(modules: Record<string, Module>) {
  Object.keys(modules).forEach((moduleKey) => {
    const module = modules[moduleKey];

    if (module.registerRoutes) {
      module.registerRoutes(router);
    }
  });
}

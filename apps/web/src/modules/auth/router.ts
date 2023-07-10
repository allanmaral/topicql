import { RouteRecordRaw, Router } from 'vue-router';

const Module = () => import('./AuthModule.vue');
const Login = () => import('./pages/LoginPage.vue');

const moduleRoute: RouteRecordRaw = {
  path: '/auth',
  component: Module,
  children: [
    {
      path: '',
      component: Login,
    },
    {
      path: ':id',
      component: Login,
    },
  ],
};

export const registerRoutes = (router: Router) => {
  router.addRoute(moduleRoute);
};

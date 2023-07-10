import { RouteRecordRaw } from 'vue-router';

const Module = () => import('./ProfileModule.vue');
const Profile = () => import('./pages/ProfilePage.vue');

const moduleRoute: RouteRecordRaw = {
  path: '/profile',
  component: Module,
  children: [
    {
      path: '',
      component: Profile,
    },
    {
      path: ':id',
      component: Profile,
    },
  ],
};

export const routes = moduleRoute;

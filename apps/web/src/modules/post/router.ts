import { RouteRecordRaw } from 'vue-router';

const Module = () => import('./PostModule.vue');
const Create = () => import('./pages/CreateTopicPage.vue');
const Reply = () => import('./pages/ReplyTopicPage.vue');

const moduleRoute: RouteRecordRaw = {
  path: '/topic',
  component: Module,
  children: [
    {
      path: 'create',
      component: Create,
    },
    {
      path: ':id/reply',
      component: Reply,
    },
  ],
};

export const routes = moduleRoute;

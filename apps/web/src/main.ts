import { createApp } from 'vue';

import { router } from './routes.ts';
import { registerModules } from './modules';
import { AuthModule } from './modules/auth';
import { TabBarModule } from './modules/tab-bar';
import App from './App.vue';

import './assets/style/style.css';

const app = createApp(App);

registerModules({
  auth: AuthModule,
  tabBar: TabBarModule,
});

app.use(router);

app.mount('#app');

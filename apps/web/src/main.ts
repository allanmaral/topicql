import { createApp } from 'vue';

import { router } from './routes.ts';
import { registerModules } from './modules';
import { TabBarModule } from './modules/tab-bar';
import App from './App.vue';

import './assets/style/style.css';

const app = createApp(App);

registerModules({
  tabBar: TabBarModule,
});

app.use(router);

app.mount('#app');

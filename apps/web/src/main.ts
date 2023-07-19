import { createApp } from 'vue';

import { router } from './routes.ts';
import { registerModules } from './modules';
import { TabBarModule } from './modules/tab-bar';
import App from './App.vue';

import './assets/style/style.css';
import { graphql } from './lib/graphql/client.ts';

const app = createApp(App);

registerModules({
  tabBar: TabBarModule,
});

app.use(router);
app.use(graphql);

app.mount('#app');

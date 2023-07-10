import { createApp } from "vue";

import App from "./App.vue";
import { registerModules } from "./modules";
import { AuthModule } from "./modules/auth";
import { router } from "./routes.ts";

import "./assets/style/style.css";
import { TabBarModule } from "./modules/tab-bar/index.ts";

const app = createApp(App);

registerModules({
  auth: AuthModule,
  tabBar: TabBarModule,
});

app.use(router);
app.mount("#app");

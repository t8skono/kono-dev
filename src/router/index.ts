// router.ts
import { createRouter, createWebHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";

// import App from "../App.vue";
// import App from "../App.vue";
import Home from "../views/HomeContents.vue";
import Page1 from "../views/Page1.vue";
import Page2 from "../views/Page2.vue";
import Page3 from "../views/Page3.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: "/page1", name: "page1", component: Page1 },
  { path: "/page2", name: "page2", component: Page2 },
  { path: "/page3", name: "page3", component: Page3 },
];

const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
});

export default router;

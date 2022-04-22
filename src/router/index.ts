// router.ts
import { createRouter,createWebHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router'

// import App from "../App.vue";
// import App from "../App.vue";
import Home from "../views/Home.vue";
import Page01 from "../views/Page01.vue";
// import Page2 from "../views/Page2.vue";

const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'Home', component: Home },
    { path: '/page01', name: 'page01', component: Page01 },
    // { path: '/Page2', name: 'page2', component: Page2 },
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})

export default router;
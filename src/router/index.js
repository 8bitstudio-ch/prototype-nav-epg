import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Paroisses from "@/views/Paroisses.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/paroisses",
    name: "Paroisses",
    component: Paroisses,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
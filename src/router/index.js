import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Video from "../views/Video.vue";
import Questions from "../views/Questions.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/video",
    name: "Video",
    component: Video,
  },

  {
    path: "/questions",
    name: "Questions",
    component: Questions,
  },
  {
    path: "/questions/:id",
    name: "VideoDetail",
    component: Questions,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

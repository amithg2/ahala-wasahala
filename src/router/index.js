import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Video from "../views/Video.vue";
import Questions from "../views/Questions.vue";
import Puzzle from "../views/Puzzle.vue";

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
    path: "/questions/:id",
    name: "Question",
    component: Questions,
  },

  {
    path: "/puzzle",
    name: "Puzzle",
    component: Puzzle,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

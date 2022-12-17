import { createRouter, createWebHistory } from "vue-router";
import Recipe from "./views/RecipeView.vue";
import Submit from "./views/SubmitView.vue";
const routes = [
  {
    path: "/recipe/:id",
    name: "Recipe",
    component: Recipe,
  },
  {
    path: "/submit",
    name: "Submit",
    component: Submit,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

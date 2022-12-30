import { createRouter, createWebHistory } from "vue-router";
import Recipe from "./views/RecipeView.vue";
import Submit from "./views/SubmitView.vue";
import Author from "./views/AuthorView.vue";
import Browse from "./views/BrowseView.vue";
import Search from "./views/SearchView.vue";
import Main from "./views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
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
  {
    path: "/author/:author",
    name: "Author",
    component: Author,
  },
  {
    path: "/browse",
    name: "Browse",
    component: Browse,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

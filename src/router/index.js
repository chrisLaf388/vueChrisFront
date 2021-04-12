import Login from "@/views/Login.vue";
import RapportsVisiteur from "@/views/RapportVisiteurListe.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Login,
  },
  {
    path: "/rapportsVisiteur",
    name: "RapportsVisiteur",
    component: RapportsVisiteur,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
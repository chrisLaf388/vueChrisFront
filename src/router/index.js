import CreerRapport from "@/views/CreerRapport.vue";
import FicheRapportVuParVisiteur from "@/views/FicheRapportVuParVisiteur.vue";
import Login from "@/views/Login.vue";
import ModifierRapport from "@/views/ModifierRapport.vue";
import RapportsVisiteur from "@/views/RapportVisiteurListe.vue";
import ListeUtilisateurs from "@/views/UtilisateursListe.vue";
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
  {
    path: "/creerRapport",
    name: "CreerRapport",
    component: CreerRapport,
  },
  {
    path: "/ficheRapportVuParVisiteur",
    name: "FicheRapportVuParVisiteur",
    component: FicheRapportVuParVisiteur,
  },
  {
    path: "/modifierRapport",
    name: "ModifierRapport",
    component: ModifierRapport,
  },
  {
    path: "/utilisateurs",
    name: "Utilisateurs",
    component: ListeUtilisateurs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
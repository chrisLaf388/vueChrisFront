import CreerRapport from "@/views/CreerRapport.vue";
import FicheRapportVuParVisiteur from "@/views/FicheRapportVuParVisiteur.vue";
import Login from "@/views/Login.vue";
import ModifierRapport from "@/views/ModifierRapport.vue";
import RapportsVisiteur from "@/views/RapportVisiteurListe.vue";
import RapportRedacteurListe from "@/views/RapportRedacteurListe.vue";
import RapportRedacteurFiche from "@/views/RapportRedacteurFiche.vue"
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
  },{
    path: "/modifierRapport",
    name: "modifierRapport",
    component: ModifierRapport,
  },
  {
    path: "/RapportRedacteurListe",
    name: "RapportRedacteurListe",
    component: RapportRedacteurListe,
  },
  {
    path: "/RapportRedacteurFiche",
    name: "RapportRedacteurFiche",
    component: RapportRedacteurFiche,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import CreerRapport from "@/views/CreerRapport.vue";
import CreerUtilisateur from "@/views/CreerUtilisateur.vue";
import FicheRapportVuParVisiteur from "@/views/FicheRapportVuParVisiteur.vue";
import FicheUtilisateur from "@/views/FicheUtilisateur.vue";
import Login from "@/views/Login.vue";
import ModifierRapport from "@/views/ModifierRapport.vue";
import RapportRedacteurFiche from "@/views/RapportRedacteurFiche.vue";
import RapportRedacteurListe from "@/views/RapportRedacteurListe.vue";
import RapportsVisiteur from "@/views/RapportVisiteurListe.vue";
import ListeUtilisateurs from "@/views/UtilisateursListe.vue";
import ModifierUtilisateur from "@/views/ModifierUtilisateur.vue";
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
    path: "/rapportRedacteurListe",
    name: "RapportRedacteurListe",
    component: RapportRedacteurListe,
  },
  {
    path: "/rapportRedacteurFiche",
    name: "RapportRedacteurFiche",
    component: RapportRedacteurFiche,
  },
  {
    path: "/utilisateurs",
    name: "Utilisateurs",
    component: ListeUtilisateurs,
  },
  {
    path: "/ficheUtilisateur",
    name: "FicheUtilisateur",
    component: FicheUtilisateur,
  },
  {
    path: "/creerUtilisateur",
    name: "CreerUtilisateur",
    component: CreerUtilisateur,
  },
  {
    path: "/modifierUtilisateur",
    name: "ModifierUtilisateur",
    component: ModifierUtilisateur,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
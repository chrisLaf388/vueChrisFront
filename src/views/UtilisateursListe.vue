<template>
  <main class="mx-auto d-flex align-items-center">
    <div class="container login-container">
      <div class="row">
        <div class="col-12 login-form-1 center px-0 py-0">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a
                class="nav-link text-white"
                @click="listeUtilisateurs('visiteur')"
                :class="{ active: visiteurActive }"
                >Visiteurs</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                @click="listeUtilisateurs('redacteurchercheur')"
                :class="{ active: rcActive }"
                >Rédacteurs/Chercheurs</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                @click="listeUtilisateurs('rh')"
                :class="{ active: rhActive }"
                >Ressources humaines</a
              >
            </li>
          </ul>
          <div id="content">
            <div
              id="labels"
              class="d-flex justify-content-between px-1 mb-1 mt-4"
            >
              <p class="text-white mb-0">Nom prénom</p>
              <p class="text-white mb-0">Date d'embauche</p>
            </div>
            <div>
              <ul id="visiteurs" class="p-0 m-0">
                <li
                  v-for="utilisateur in utilisateurs"
                  :key="utilisateur.login"
                >
                  <div class="card mb-1">
                    <div
                      class="card-body d-flex justify-content-between py-0 px-1"
                    >
                      <div class="conteneurInfos py-1 px-0">
                        <div class="infos d-flex justify-content-between">
                          <span
                            >{{ utilisateur.nom }}
                            {{ utilisateur.prenom }}</span
                          >
                          <span>{{ utilisateur.dateEmbauche }}</span>
                        </div>
                      </div>
                      <div class="boutons d_flex justify-content-end py-1 px-0">
                        <button
                          class="mr-2 text-primary bg-white border-0"
                          @click="ficheModifierVisiteur(utilisateur.login)"
                        >
                          <i class="fas fa-pen"></i>
                        </button>
                        <button
                          class="text-danger bg-white border-0"
                          @click="
                            supprimerUtilisateur(utilisateur.login, getRoute())
                          "
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="form-group d-flex justify-content-evenly mt-4">
              <router-link
                class="btn d-block rounded-pill bg-transparent text-primary px-3 py-2 border-primary fs-5"
                to="/creerRapport"
                >Créer un utilisateur</router-link
              >
              <select
                name="idRapport"
                id="idRapport"
                class="border-white rounded-pill bg-transparent text-white fs-6"
                @change="getFicheUtilisateur($event)"
              >
                <option value="" class="text-dark">
                  --Sélectionnez un utilisateur--
                </option>
                <option
                  class="text-dark"
                  v-for="visiteur in info"
                  :key="visiteur"
                  v-bind:value="visiteur.login"
                >
                  {{ visiteur.nom }} - {{ visiteur.prenom }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "ListeUtilisateurs",
  props: ["user"],

  data() {
    return {
      utilisateurs: null,
      visiteurActive: true,
      rcActive: false,
      rhActive: false,
    };
  },
  methods: {
    listeUtilisateurs: async function (route) {
      await axios
        .get("http://localhost:3002/gsb/" + route, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .catch((e) => {
          console.log(e);
        })
        .then((response) => {
          this.utilisateurs = response.data;
        });
      switch (route) {
        case "visiteur":
          this.visiteurActive = true;
          this.rcActive = false;
          this.rhActive = false;
          break;

        case "redacteurchercheur":
          this.visiteurActive = false;
          this.rcActive = true;
          this.rhActive = false;
          break;

        case "rh":
          this.visiteurActive = false;
          this.rcActive = false;
          this.rhActive = true;
          break;
      }
    },
    getRoute: function () {
      let route = "";
      if (this.rcActive) {
        route = "redacteurchercheur";
      } else if (this.rhActive) {
        route = "rh";
      } else if (this.visiteurActive) {
        route = "visiteur";
      }
      return route;
    },
    ficheUtilisateur: function (id) {
      localStorage.setItem("rapportId", id);
      this.$router.push("/ficheUtilisateur");
    },
    ficheModifier: function (id) {
      localStorage.setItem("rapportId", id);
      this.$router.push("/modifierUtilisateur");
    },
    supprimerUtilisateur: async function (id, route) {
      if (confirm("Voulez-vous vraiment supprimer cet utilisateur?")) {
        await axios("http://localhost:3002/gsb/" + route + "/" + id, {
          method: "DELETE",
          withCredentials: true,
        });
        window.location.reload();
      }
    },
    getFicheRapport: function (e) {
      let value = e.target.value;
      localStorage.setItem("rapportId", value);
      this.$router.push("/ficheRapportVuParVisiteur");
    },
  },
  mounted() {
    this.listeUtilisateurs("visiteur");
  },
};
</script>

<style scoped>
main {
  width: 100%;
  height: 90vh;
}

.active {
  color: black !important;
  background-color: white;
  cursor: none;
}

.login-form-1 {
  background-color: rgba(0, 0, 0, 0.37);
  height: 70vh;
}

#labels {
  font-weight: bold;
  width: 54%;
}

li {
  list-style: none;
}

.nav-item {
  width: 33.3%;
  cursor: pointer;
}

.infos {
  width: 67%;
}

span {
  width: 30%;
  white-space: nowrap;
  text-align: left;
}

.conteneurInfos {
  width: 90%;
  cursor: pointer;
}

.boutons {
  width: 10%;
}

button,
select {
  width: 30%;
}
</style>
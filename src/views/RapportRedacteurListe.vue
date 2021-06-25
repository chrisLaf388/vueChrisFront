<template>
  <main class="mx-auto d-flex align-items-center">
    <div class="container login-container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8 login-form-1 center px-0 py-4">
          <h3 class="text-center text-white mb-4">Rapports</h3>
          <div id="content">
            <div id="labels" class="justify-content-between px-1">
              <p class="text-white">Date</p>
              <p class="text-white">Motif</p>
              <p class="text-white">Bilan</p>
            </div>
            <div>
              <ul id="rapports" class="p-0 m-0">
                <li v-for="item in info" :key="item.id">
                  <div class="card mb-1">
                    <div
                      class="card-body d-flex justify-content-between py-0 px-1"
                    >
                      <div class="conteneurInfos py-1 px-0">
                        <div
                          class="infos d-flex justify-content-between"
                          @click="ficheRapport(item.id)"
                        >
                          <span>{{ item.date }}</span>
                          <span>{{ item.motif }}...</span>
                          <span>{{ item.bilan }}...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="form-group d-flex justify-content-evenly mt-4">
              <div id="search">
                <input
                  v-model="motcle"
                  type="search"
                  name="motCle"
                  id="motCle"
                  placeholder="Mot clé"
                />
                <i
                  @click="rechercheMot"
                  id="iconeRechercher"
                  class="fas fa-search text-white"
                ></i>
              </div>
              <select
                name="idRapport"
                id="idRapport"
                class="border-white rounded-pill bg-transparent text-white fs-6"
                @change="getFicheRapport($event)"
              >
                <option value="" class="text-dark">
                  --Sélectionnez un rapport--
                </option>
                <option
                  class="text-dark"
                  v-for="item in info"
                  :key="item"
                  v-bind:value="item.id"
                >
                  {{ item.date }} - {{ item.bilan.substring(0, 20) + "..." }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "ListeRapport",
  props: ["user"],

  data() {
    return {
      info: null,
    };
  },
  methods: {
    listeRapport: async function () {
      //recupérer login via localStorage pour afficher la liste des rapports lié aux visiteurs

      const dataJson = await axios
        .get("https://localhost/gsb/rapport/", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .catch((e) => {
          console.log(e);
        })
        .then((response) => (this.info = response));
      this.info = dataJson.data;
    },
    getFicheRapport: function (e) {
      let value = e.target.value;
      localStorage.setItem("rapportId", value);
      this.$router.push("/rapportRedacteurFiche");
    },
    ficheRapport: function (id) {
      localStorage.setItem("rapportId", id);
      this.$router.push("/rapportRedacteurFiche");
    },
    rechercheMot: function (){
      this.$store.dispatch('setMotCle', this.motcle)
      this.$router.push("/rapportRedacteurMotCle");
    },      
  },
  mounted() {
    this.listeRapport();
  },
};
</script>

<style scoped>
main {
  width: 100%;
  height: 90vh;
}

.login-form-1 {
  background-color: rgba(0, 0, 0, 0.37);
  height: 70vh;
}

#labels {
  display: flex;
  font-weight: bold;
  width: 60%;
}

li {
  list-style: none;
}

.infos {
  width: 68%;
}

span {
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
}

.conteneurInfos {
  width: 100%;
  cursor: pointer;
}

.boutons {
  width: 10%;
}

button,
select {
  width: 30%;
}

#aucunRapport {
  width: fit-content;
  font-weight: bold;
}

#idRapport {
  border: 2px solid white;
}

#rapports {
  height: 39vh;
  overflow: auto;
}

.modifier,
.supprimer {
  border: none;
}
</style>


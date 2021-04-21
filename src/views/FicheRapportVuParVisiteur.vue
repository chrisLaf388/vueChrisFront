<template>
  <main class="mx-auto d-flex align-items-center">
    <div class="container login-container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4 login-form-1 center px-5 py-4">
          <h3 class="text-center text-white mb-5">Rapport</h3>
          <div>
            <p class="text-white">
              Date: <span id="date"> {{ date }} </span>
            </p>
            <p class="text-white">
              Motif: <span id="motif"> {{ motif }} </span>
            </p>
            <p class="text-white">
              Bilan: <span id="bilan"> {{ bilan }} </span>
            </p>
          </div>
          <div class="form-group d-flex mt-4 justify-content-around">
            <button
              id="modifier"
              class="d-block m-auto rounded-pill bg-transparent text-primary px-3 py-2 border-primary fs-5"
              @click="rediriger()"
            >
              Modifier
            </button>
            <button
              id="supprimer"
              class="d-block m-auto rounded-pill bg-transparent text-danger px-3 py-2 border-danger fs-5"
              @click="supprimer(rapportId)"
            >
              Supprimer
            </button>
          </div>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "FicheRapportVisiteur",
  data() {
    return {
      bilan: "",
      motif: "",
      date: "",
      rapportId: localStorage.getItem("rapportId"),
    };
  },
  methods: {
    afficherFiche: async function () {
      await axios
        .get(
          "http://localhost:3002/gsb/rapport/" +
            localStorage.getItem("rapportId"),
          {
            withCredentials: true,
          }
        )
        .catch((e) => {
          console.log(e);
        })
        .then((response) => {
          this.bilan = response.data.bilan;
          this.motif = response.data.motif;
          this.date = response.data.date;
        });
    },
    rediriger: function () {
      this.$router.push("/modifierRapport");
    },
    supprimer: async function (id) {
      if (confirm("Voulez-vous vraiment supprimer ce rapport?")) {
        await axios("http://localhost:3002/gsb/rapport/" + id, {
          method: "DELETE",
          withCredentials: true,
        });
        this.$router.push("/rapportsVisiteur");
      }
    },
  },
  mounted() {
    this.afficherFiche();
  },
};
</script>

<style scoped>
main {
  width: 80%;
  height: 90vh;
}

button {
  width: 49%;
}

.login-form-1 {
  background-color: rgba(0, 0, 0, 0.37);
}

p {
  font-weight: bold;
}

span {
  font-weight: normal;
}
</style>
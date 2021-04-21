<template>
  <main class="mx-auto d-flex align-items-center">
    <div class="container login-container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 login-form-1 center px-5 py-4">
          <h3 class="text-center text-white mb-5">Créer un utilisateur</h3>
          <form @submit.prevent="creerUtilisateur()">
            <div class="form-group row">
              <p class="col-6 d-flex flex-column">
                <label class="text-white">Login:</label>
                <input
                  type="text"
                  name="login"
                  id="login"
                  placeholder="Login"
                />
              </p>
              <p class="col-6 d-flex flex-column">
                <label class="text-white">Mot de passe:</label>
                <input
                  type="password"
                  name="mdp"
                  id="mdp"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                />
              </p>
            </div>
            <div class="form-group row">
              <p class="col-6 d-flex flex-column">
                <label class="text-white">Nom:</label>
                <input type="text" name="nom" id="nom" placeholder="Nom" />
              </p>
              <p class="col-6 d-flex flex-column">
                <label class="text-white">Prénom:</label>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  placeholder="Prénom"
                />
              </p>
            </div>
            <div class="form-group">
              <p id="parAdresse" class="d-flex flex-column">
                <label class="text-white">Adresse:</label>
                <input
                  class="w-100"
                  coltype="text"
                  name="adresse"
                  id="adresse"
                  placeholder="Adresse"
                />
              </p>
            </div>
            <div class="form-group row">
              <p class="col-6 d-flex flex-column">
                <label class="text-white">Code postal:</label>
                <input
                  type="text"
                  name="CP"
                  id="CP"
                  placeholder="Code Postal"
                />
              </p>
              <p class="col-6 d-flex flex-column">
                <label class="text-white">Ville:</label>
                <input
                  type="text"
                  name="ville"
                  id="ville"
                  placeholder="Ville"
                />
              </p>
            </div>
            <div class="form-group row">
              <p class="col-6 d-flex flex-column">
                <label class="text-white">Date de naissance:</label>
                <input
                  type="date"
                  name="date"
                  id="dateNaissance"
                  placeholder="Date de naissance"
                />
              </p>
            </div>
            <div class="form-group d-flex mt-4">
              <button
                type="submit"
                id="creer"
                class="btnSubmit d-block m-auto rounded-pill bg-transparent text-primary px-3 py-2 border-primary fs-5"
              >
                Créer
              </button>
              <button
                type="submit"
                id="annuler"
                class="btnSubmit d-block m-auto rounded-pill bg-transparent text-danger px-3 py-2 border-danger fs-5"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "CreerUtilisateur",
  data() {
    return {
      login: "",
      nom: "",
    };
  },
  methods: {
    creerUtilisateur: async function () {
      let res = await axios(
        "http://localhost:3002/gsb/" + localStorage.getItem("route"),
        {
          method: "POST",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            login: this.login,
            nom: this.nom,
          },
        }
      );
      let data = res.data;
      localStorage.setItem("rapportId", data.id);
      this.$router.push("/ficheRapportVuParVisiteur");
    },
  },
};
</script>

<style scoped>
main {
  width: 80%;
  height: 90vh;
}

.login-form-1 {
  background-color: rgba(0, 0, 0, 0.37);
}

button {
  width: 40%;
}
</style>
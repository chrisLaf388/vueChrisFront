<template>
  <main class="mx-auto d-flex align-items-center">
    <div class="container login-container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4 login-form-1 px-5 py-4">
          <h3 class="text-center text-white mb-5">Fiche utilisateur</h3>
          <div>
            <p class="text-white">
              Login: <span id="login">{{ login }}</span>
            </p>
            <p class="text-white">
              Nom: <span id="nom">{{ nom }}</span>
            </p>
            <p class="text-white">
              Prénom: <span id="prenom">{{ prenom }}</span>
            </p>
            <p class="text-white">
              Adresse: <span id="adresse">{{ adresse }}</span>
            </p>
            <p class="text-white">
              Code postal: <span id="cp">{{ codePostal }}</span>
            </p>
            <p class="text-white">
              Ville: <span id="ville">{{ ville }}</span>
            </p>
            <p class="text-white">
              Date de naissance:
              <span id="dateNaissance">{{ dateNaissance }}</span>
            </p>
            <p class="text-white">
              Date d'embauche: <span id="dateEmbauche">{{ dateEmbauche }}</span>
            </p>
            <p class="text-white">
              Role de l'utilisateur: <span id="role">{{ role }}</span>
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
              @click="supprimer()"
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
      login: "",
      nom: "",
      prenom: "",
      dateEmbauche: "",
      dateNaissance: "",
      adresse: "",
      codePostal: "",
      ville: "",
      role: "",
    };
  },
  methods: {
    afficherFiche: async function () {
      await axios
        .get(
          "https://localhost/gsb/" +
            localStorage.getItem("route") +
            "/" +
            localStorage.getItem("utilisateurId"),
          {
            withCredentials: true,
          }
        )
        .catch((e) => {
          console.log(e);
        })
        .then((response) => {
          this.login = response.data.login;
          this.nom = response.data.nom;
          this.prenom = response.data.prenom;
          this.dateEmbauche = response.data.dateEmbauche;
          this.dateNaissance = response.data.dateNaissance;
          this.adresse = response.data.adresse;
          this.codePostal = response.data.codePostal;
          this.ville = response.data.ville;
        });
    },
    getRole: async function () {
      if (localStorage.getItem("rc") === "true") {
        this.role = "Rédacteur/Chercheur";
      } else if (localStorage.getItem("rh") === "true") {
        this.role = "Ressources humaines";
      } else if (localStorage.getItem("vis") === "true") {
        this.role = "Visiteur";
      }
      return this.role;
    },
    rediriger: function () {
      this.$router.push("/modifierUtilisateur");
    },
    supprimer: async function () {
      if (confirm("Voulez-vous vraiment supprimer cet utilisateur?")) {
        await axios(
          "https://localhost/gsb/" +
            localStorage.getItem("route") +
            "/" +
            localStorage.getItem("utilisateurId"),
          {
            method: "DELETE",
            withCredentials: true,
          }
        );
        this.$router.push("/utilisateurs");
      }
    },
  },
  mounted() {
    this.afficherFiche();
    this.getRole();
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
  text-align: left !important;
}

span {
  font-weight: normal;
}
</style>
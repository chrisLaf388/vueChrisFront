<template>
  <main class="mx-auto d-flex align-items-center">
    <div class="container login-container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4 login-form-1 center px-5 py-4">
          <h3 class="text-center text-white mb-5">Merci de vous connecter.</h3>
          <form>
            <div class="form-group">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
                </div>
                <input
                  type="text"
                  class="form-control inlineFormInputGroup"
                  id="login"
                  placeholder="Your login"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fas fa-lock mt-1 mb-1"></i>
                  </div>
                </div>
                <input
                  type="password"
                  class="form-control mb-3 inlineFormInputGroup"
                  id="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                />
              </div>
            </div>
            <div class="form-group">
              <button
                type="submit"
                id="connexion"
                class="btnSubmit d-block m-auto rounded-pill bg-transparent text-primary px-3 py-2 border-primary fs-5"
                v-on:click.prevent="listeApi()"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      role: "",
    };
  },
  methods: {
    listeApi: async function () {
      const login = document.querySelector("#login").value;
      const password = document.querySelector("#password").value;
      const credential = window.btoa(login + ":" + password);

      const resJson = await axios
        .get("http://localhost:3002/gsb/login", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + credential,
          },
        })
        .catch((e) => {
          console.log(e);
        });

      this.role = resJson.data.role;
      console.log(this.role);
    },
  },
};
</script>

<style>
main {
  width: 80%;
  height: 90vh;
}
.input-group-text {
  border-radius: 2px 0 0 2px;
}
.btnSubmit {
  width: 60%;
}
.login-form-1 {
  background-color: rgba(0, 0, 0, 0.37);
}
</style>
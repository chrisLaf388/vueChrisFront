<template>
  <Header></Header>
  <ListeRapport></ListeRapport>
</template>

<script>
import Header from "./components/Header.vue";
//import Login from "./components/Login.vue";
import ListeRapport from "./components/RapportVisiteurListe";
export default {
  name: "App",
  components: {
    Header,
    ListeRapport,
    //Login,
  },
};
</script>

<style>
body {
  background: url("assets/img/fond.jpg");
  background-size: cover;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

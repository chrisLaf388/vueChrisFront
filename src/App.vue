<template>
  <Header></Header>
  <Login></Login>
</template>

<script>
import Header from "./components/Header.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Header,
    Login,
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

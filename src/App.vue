<template>
  <Header v-bind:user="user"></Header>
  <router-view v-bind:user="user"></router-view>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.user = localStorage.getItem("username");
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

<template>
  <header
    class="d-flex justify-content-between align-items-center p-2 bg-white"
  >
    <img src="../assets/img/logo-gsb.png" id="logo" alt="logo" />
    <div class="d-flex justify-content-end align-items-center" id="connexion">
      <div class="fs-5 mr-5 text-primary" id="pseudo" v-if="false">Pseudo</div>
      <i id="deconnexion" class="fas fa-power-off fs-5 text-primary"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
img {
  width: 3%;
}
#deconnexion:hover {
  color: #dc3545 !important;
}
#connexion div {
  padding-right: 10px;
  font-weight: bold;
}
#deconnexion,
#logo {
  cursor: pointer;
}
input:focus,
textarea:focus,
button:focus,
select:focus {
  outline: 0;
}
</style>
<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    const username = localStorage.getItem("username");
    const key = localStorage.getItem("key");
    if (username && key) this.$store.commit("LOGIN_USER", { username, key });
  }
};
</script>

<style></style>

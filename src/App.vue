<template>
  <v-app>
    <Navbar></Navbar>

    <v-content>
      <Home></Home>
    </v-content>
    <v-footer app>
      <AppFooter></AppFooter>
    </v-footer>
  </v-app>
</template>

<script>
import AppFooter from "src/components/AppFooter";
import Navbar from "src/components/Navbar";
import Home from "src/components/Home";
export default {
  name: "App",

  components: {
    AppFooter,
    Navbar,
    Home
  },

  data: () => ({
    //
  })
};
</script>

<style>
@media only screen and (max-width: 1930px) {
  .container {
    max-width: 1185px;
  }
}
</style>

<template>
  <div>
    <Navbar></Navbar>
    <v-content>
      <Home></Home>
    </v-content>
    <v-footer app>
      <AppFooter></AppFooter>
    </v-footer>
  </div>
</template>

<script>
import AppFooter from "src/components/AppFooter";
import Navbar from "src/components/Navbar";
import Home from "src/components/Home";
export default {
  name: "HomeContainer",
  components: {
    AppFooter,
    Navbar,
    Home
  }
};
</script>

<style>
@media only screen and (max-width: 1930px) {
  .container {
    max-width: 1185px;
  }
}
</style>

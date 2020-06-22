<template>
  <div class="d-flex d-flex-col flex-1">
    <NavBar></NavBar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <AppFooter></AppFooter>
    </v-footer>
  </div>
</template>

<script>
import AppFooter from "src/components/AppFooter";
import NavBar from "src/components/nav/top/Navbar";
export default {
  name: "HomeContainer",
  components: {
    AppFooter,
    NavBar
  }
};
</script>

<style>
@media only screen and (max-width: 1930px) {
  .container {
    max-width: 1185px;
  }
}

.flex-1 {
  flex: 1;
}
</style>

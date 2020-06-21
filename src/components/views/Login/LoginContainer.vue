<template>
  <div class="d-flex d-flex-col flex-1">
    <NavBar></NavBar>
    <v-content>
      <LoginPage></LoginPage>
    </v-content>
    <v-footer app>
      <AppFooter></AppFooter>
    </v-footer>
  </div>
</template>

<script>
import AppFooter from "src/components/AppFooter";
import LoginPage from "src/components/views/Login/LoginPage";
import NavBar from "src/components/nav/top/Navbar";
export default {
  name: "HomeContainer",
  components: {
    AppFooter,
    LoginPage,
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

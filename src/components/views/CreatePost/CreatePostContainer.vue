<template>
  <div>
    <div>
      <Navbar></Navbar>
      <v-content>
        <v-container>
          Create posts here
        </v-container>
      </v-content>
      <v-footer app>
        <AppFooter></AppFooter>
      </v-footer>
    </div>
  </div>
</template>

<script>
import Navbar from "src/components/Navbar";
import AppFooter from "src/components/AppFooter";

export default {
  name: "CreatePostContainer",
  components: {
    Navbar,
    AppFooter
  }
};
</script>

<style scoped>
@media only screen and (max-width: 1930px) {
  .container {
    max-width: 1185px;
  }
}
</style>

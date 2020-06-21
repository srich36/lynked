<template>
  <div>
    <div>
      <Navbar></Navbar>
      <v-content>
        <v-container>
          <CreatePostContent></CreatePostContent>
        </v-container>
      </v-content>
      <v-footer app>
        <AppFooter></AppFooter>
      </v-footer>
    </div>
  </div>
</template>

<script>
import Navbar from "src/components/nav/top/Navbar";
import AppFooter from "src/components/AppFooter";
import CreatePostContent from "src/components/views/CreatePost/CreatePostContent";

export default {
  name: "CreatePostContainer",
  components: {
    Navbar,
    AppFooter,
    CreatePostContent
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

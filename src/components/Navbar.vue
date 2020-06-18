<template>
  <div>
    <v-app-bar app dark elevate-on-scroll>
      <v-row align="center">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-col class="text-left">
          <RouteButton link="/" icon="mdi-home" text="Home"></RouteButton>
        </v-col>
        <v-spacer> </v-spacer>
        <v-col class="text-right">
          <v-tooltip right bottom>
            <template v-slot:activator="{ on }">
              <ResizeableFabButton
                class="mr-2 mr-sm-3 mr-md-5 d-inline-flex"
                :on="on"
                icon="mdi-plus"
                link="/post"
              ></ResizeableFabButton>
            </template>
            <span class="text-right">Create Post</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary dark app>
      <NavDrawerContent></NavDrawerContent>
    </v-navigation-drawer>
  </div>
</template>

<script>
import NavDrawerContent from "src/components/NavDrawerContent";
import RouteButton from "src/components/RouteButton";
import ResizeableFabButton from "src/components/ResizeableFabButton";
export default {
  name: "Navbar",
  components: {
    NavDrawerContent,
    RouteButton,
    ResizeableFabButton
  },
  data: () => ({ drawer: false })
};
</script>

<style scoped>
/* If you don't use the app attribute with the v-navigation-drawer component
you need to apply position: fixed yourself */
.v-nav-drawer {
  position: fixed;
}
</style>

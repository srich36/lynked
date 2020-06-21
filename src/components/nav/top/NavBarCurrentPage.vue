<template>
  <v-btn :to="link">
    <v-icon class="mr-2" v-if="icon">{{ icon }}</v-icon>
    {{ currRouteName }}
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      //This only works for the main views since it re-renders
      //The nav bar at every view
      routeIconMatcher: {
        home: "mdi-home",
        createPost: "mdi-pencil"
      }
    };
  },
  computed: {
    icon() {
      return this.routeIconMatcher[this.currRouteName];
    },
    link() {
      return this.$router.currentRoute.fullPath;
    },
    currRouteName() {
      return this.$router.currentRoute.name;
    }
  }
};
</script>

<template>
  <v-btn :to="link">
    <v-icon class="mr-2">{{ icon }}</v-icon>
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: "RouteButton",
  props: {
    link: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: "Home"
    },
    icon: {
      type: String,
      default: "mdi-home"
    }
  }
};
</script>

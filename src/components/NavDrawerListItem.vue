<template>
  <v-list-item :to="link">
    <v-list-item-icon>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ text }}</v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: "NavDrawerListItem",
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: "mdi-chevron-right"
    }
  }
};
</script>

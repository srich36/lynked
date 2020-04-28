<template>
  <div>
    <v-btn
      fab
      color="primary"
      dark
      v-on="on"
      class="d-none d-md-inline-flex"
      :to="link"
    >
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
    <v-btn
      fab
      color="primary"
      dark
      small
      v-on="on"
      class="d-inline-flex d-md-none"
      :to="link"
    >
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ResizeableFabButton",
  props: {
    on: {
      required: true
    },
    icon: {
      type: String,
      default: "mdi-plus"
    },
    link: {
      type: String,
      default: ""
    }
  }
};
</script>

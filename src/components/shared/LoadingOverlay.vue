<template>
  <v-overlay :value="on">
    <v-progress-circular indeterminate :size="size"></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: "LoadingOverlay",
  props: {
    on: {
      type: Boolean,
      required: true
    },
    size: {
      type: Number,
      default: 64
    }
  }
};
</script>

<template>
  <v-chip
    class="ma-2"
    :color="color"
    text-color="white"
    close
    ripple
    @click:close="closed"
  >
    <v-avatar
      left
      :class="color"
      class="darken-4"
      v-if="typeof count !== 'undefined'"
    >
      {{ count }}
    </v-avatar>
    Years
    <v-icon right v-if="typeof icon !== 'undefined'">{{ icon }}</v-icon>
  </v-chip>
</template>

<script>
export default {
  name: "Tag",
  props: {
    color: {
      type: String,
      default: "blue"
    },
    count: {
      type: Number
    },
    icon: {
      type: String
    }
  },

  methods: {
    closed(e) {
      console.log(e);
      this.$emit("close");
    }
  }
};
</script>

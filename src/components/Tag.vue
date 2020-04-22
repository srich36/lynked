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

    <span class="v-icon-span" v-if="typeof icon !== 'undefined'">
      <v-icon right>{{ icon }}</v-icon>
    </span>
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
    closed() {
      this.$emit("close");
    }
  }
};
</script>

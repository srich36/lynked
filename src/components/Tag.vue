<template>
  <v-chip
    class="ma-2"
    :color="color"
    text-color="white"
    :close="closeAble"
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

    <v-icon class="v-icon-test" v-if="typeof icon !== 'undefined'" right>{{
      icon
    }}</v-icon>
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
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    closed() {
      this.$emit("close");
    }
  }
};
</script>

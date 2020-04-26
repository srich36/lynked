<template>
  <v-chip
    class="ma-2"
    :color="color"
    text-color="white"
    :close="closeable"
    ripple
    label
    @click:close="closed"
  >
    <v-avatar
      left
      :class="color"
      class="darken-4"
      v-if="typeof count !== 'undefined'"
      :size="40"
    >
      {{ count }}
    </v-avatar>

    <div class="tag-content">
      <slot></slot>
    </div>

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
      default: "grey"
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
    },
    text: {
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

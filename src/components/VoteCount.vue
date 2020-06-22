<template>
  <h4 class="body-1 grey--text text--darken-1 font-weight-bold">
    {{ count }}
  </h4>
</template>

<script>
export default {
  name: "VoteCount",
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>

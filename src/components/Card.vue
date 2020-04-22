<template>
  <div class="ly-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped>
.ly-card {
  box-shadow: 0 8px 25px 0 rgba(0, 0, 0, 0.16), 0 8px 50px 0 rgba(0, 0, 0, 0.12);
}
</style>

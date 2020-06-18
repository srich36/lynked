<template>
  <div class="word-break">
    <v-icon color="grey lighten-1" small>
      mdi-account-circle
    </v-icon>
    <div class="px-2 font-weight-thin caption break-word">
      {{ userText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PostUserData",
  props: {
    userText: {
      type: String,
      default: "Anonymous"
    }
  }
};
</script>

<template>
  <div>
    <v-icon color="grey lighten-1" small>
      mdi-calendar
    </v-icon>
    <div class="px-2 font-weight-thin caption break-word">
      {{ dateDisplay }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DateMuted",
  props: {
    dateDisplay: {
      type: String,
      required: true
    }
  }
};
</script>

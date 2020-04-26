<template>
  <v-card raised shaped>
    <v-row>
      <v-col cols="4" sm="3" class="ml-2 pr-0 border-right"
        >Image here it goes here the image does
      </v-col>
      <v-col class="pl-1 pl-sm-4 pl-lg-5 pl-xl-6 border-right"
        >Content here
      </v-col>
      <v-col cols="2" lg="1" class="pl-1 pl-sm-2 pl-md-3 pl-lg-2"
        >Vote here</v-col
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Post"
};
</script>

<style>
.border-right {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}
</style>

<template>
  <v-card raised class="my-3 border-radius-8">
    <v-row>
      <v-col cols="4" sm="3" class="ml-2 pr-0">
        <div class="border-right col-1-content h-100">
          Image here it goes here the image does
        </div>
      </v-col>
      <v-col class="pl-1 pl-sm-4 pl-lg-5 pl-xl-6">
        <div class="border-right col-main-content h-100">Content here</div>
      </v-col>
      <v-col cols="2" lg="1" class="pl-1 pl-sm-2 pl-md-3 pl-lg-2">
        <div class="vote-content h-100">Vote here</div></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Post"
};
</script>

<style scoped>
.border-right {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.border-left {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}

/* Use h-100 in this component so all the columns scale together*/
.h-100 {
  height: 100%;
}

.border-radius-8 {
  border-radius: 0.5rem !important;
}
</style>

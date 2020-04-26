<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <SearchBar></SearchBar>
      </v-col>
    </v-row>
    <v-row class="pt-0 mt-n8">
      <v-col cols="12">
        <TagBox></TagBox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchBar from "src/components/SearchBar";
import TagBox from "src/components/TagBox";
export default {
  name: "Home",
  components: {
    SearchBar,
    TagBox
  },
  data() {
    return {
      title: "Test"
    };
  }
};
</script>

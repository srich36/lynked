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

    <v-divider class="mt-n5 mb-3"></v-divider>

    <Post v-for="(key, idx) in [1, 2, 3]" :key="idx"></Post>
  </v-container>
</template>

<script>
import SearchBar from "src/components/SearchBar";
import TagBox from "src/components/TagBox";
import Post from "src/components/Post";
export default {
  name: "Home",
  components: {
    SearchBar,
    TagBox,
    Post
  },
  data() {
    return {
      title: "Test"
    };
  }
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <SearchBar @search-changed="searchChanged"></SearchBar>
      </v-col>
    </v-row>
    <v-row class="pt-0 mt-n8">
      <v-col cols="12">
        <TagBox
          @tags-updated="tagsUpdated"
          :maxTagsAllowed="tagBoxMaxLengths.search"
        ></TagBox>
      </v-col>
    </v-row>

    <v-divider class="mt-n5 mb-3"></v-divider>
    <v-skeleton-loader
      v-if="loading"
      type="skeleton"
      :types="{ skeleton: 'article@15' }"
      tile
      height="65vh"
    >
    </v-skeleton-loader>
    <Post
      v-else
      v-for="(post, idx) in posts"
      :key="idx"
      :title="post.title"
      :link="post.link"
      :description="post.description"
      :tags="post.tags"
      :index="idx"
      :postId="post.id"
      :getPreview="post.preview ? false : true"
      :previewImageURL="post.preview ? post.preview.preview_image_url : null"
      :previewDescription="
        post.preview ? post.preview.preview_description : null
      "
      :datePosted="post.date_posted"
      :previewTitle="post.preview ? post.preview.preview_title : null"
    ></Post>
  </v-container>
</template>

<script>
import SearchBar from "src/components/SearchBar";
import TagBox from "src/components/TagBox";
import Post from "src/components/Post";
import instance from "src/main";
import { tagBoxMaxLengths } from "src/config";

export default {
  name: "Home",
  components: {
    SearchBar,
    TagBox,
    Post
  },
  data() {
    return {
      posts: [],
      loading: false,
      searchTerm: "",
      tags: [],
      tagBoxMaxLengths: tagBoxMaxLengths
    };
  },
  methods: {
    async getPosts() {
      try {
        this.loading = true;
        const data = await instance.post("posts/searches", {
          text: this.searchTerm,
          tags: this.tags
        });
        this.posts = data.data;
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    searchChanged(search) {
      this.searchTerm = search;
      this.getPosts();
    },
    tagsUpdated(tags, valid) {
      this.tags = tags;
      if (valid) this.getPosts();
    }
  },
  async mounted() {
    this.getPosts();
  }
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 10s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

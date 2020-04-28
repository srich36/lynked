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

    <Post
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
      :previewTitle="post.preview ? post.preview.preview_title : null"
    ></Post>
  </v-container>
</template>

<script>
import SearchBar from "src/components/SearchBar";
import TagBox from "src/components/TagBox";
import Post from "src/components/Post";
import instance from "src/main";

export default {
  name: "Home",
  components: {
    SearchBar,
    TagBox,
    Post
  },
  data() {
    return {
      title: "Test",
      posts: []
    };
  },
  async mounted() {
    const data = await instance.get("posts");
    this.posts = data.data;
  }
};
</script>

<template>
  <v-card>
    <v-toolbar flat dark>
      <v-toolbar-title>Submit a post</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field filled label="Link" v-model="link"></v-text-field>
      <v-text-field filled label="Title" v-model="title"></v-text-field>

      <v-textarea filled label="Description" v-model="description"></v-textarea>

      <p class="body-2 font-weight-light pl-1 my-0">Tags</p>
      <v-divider class="my-2"></v-divider>
      <TagBox @tags-updated="tagsUpdated"></TagBox>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn dark depressed @click="createPost">
        Post
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import TagBox from "src/components/TagBox";
import { mapActions } from "vuex";
export default {
  name: "CreatePostContent",
  components: { TagBox },
  data() {
    return {
      link: "",
      title: "",
      description: "",
      tags: []
    };
  },
  computed: {
    postParams() {
      return {
        link: this.link,
        title: this.title,
        description: this.description,
        tags: this.tags
      };
    }
  },
  methods: {
    ...mapActions({
      aCreatePost: "createPost"
    }),
    tagsUpdated(tags) {
      this.tags = tags;
      console.log(this.tags);
    },

    createPost() {
      console.log(this.tags);
      this.aCreatePost(this.postParams);
    }
  }
};
</script>

<style>
.app-subheader {
  color: rgba(0, 0, 0, 0.6);
}
</style>

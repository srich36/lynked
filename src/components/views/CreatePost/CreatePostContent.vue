<template>
  <v-card>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-toolbar flat dark>
      <v-toolbar-title>Submit a post</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field
        filled
        label="Link (required)"
        :counter="200"
        v-model="link"
        :error-messages="linkErrors"
      ></v-text-field>
      <v-text-field
        filled
        label="Title (required)"
        v-model="title"
        :counter="200"
        :error-messages="titleErrors"
      ></v-text-field>

      <v-textarea
        filled
        label="Description (optional)"
        v-model="description"
        :counter="500"
        :error-messages="descriptionErrors"
      ></v-textarea>

      <p class="body-2 font-weight-light pl-1 my-0">Tags (optional)</p>
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
import { validationMixin } from "vuelidate";
import { required, maxLength, url } from "vuelidate/lib/validators";
export default {
  name: "CreatePostContent",
  components: { TagBox },
  mixins: [validationMixin],

  validations: {
    link: { required, url, maxLength: maxLength(200) },
    title: { required, maxLength: maxLength(200) },
    description: { maxLength: maxLength(500) }
  },
  validationGroup: ["link", "title", "description"],
  data() {
    return {
      link: "",
      title: "",
      description: "",
      tags: [],
      overlay: false
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
    },

    linkErrors() {
      const errors = [];
      if (!this.$v.link.$dirty) return errors;
      !this.$v.link.required && errors.push("Link is required.");
      !this.$v.link.url && errors.push("Invalid url.");
      !this.$v.link.maxLength &&
        errors.push("Link cannot be longer than 200 characters.");
      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.maxLength &&
        errors.push("Description cannot be longer than 500 characters.");
      return errors;
    },
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.required && errors.push("Title is required.");
      !this.$v.title.maxLength &&
        errors.push("Title cannot be longer than 200 characters.");
      return errors;
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

    async createPost() {
      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.overlay = true;
      try {
        await this.aCreatePost(this.postParams);
        this.$router.push({ name: "home" });
      } catch (e) {
        if (process.env.NODE_ENV === "developmen") console.error(e);
      } finally {
        this.overlay = false;
      }
    }
  },
  mounted() {
    console.log(this.$v);
  }
};
</script>

<style>
.app-subheader {
  color: rgba(0, 0, 0, 0.6);
}
</style>

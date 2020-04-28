<template>
  <v-card raised class="my-3 border-radius-8">
    <v-row>
      <v-col cols="3" class="pr-0 d-none d-sm-flex flex-column">
        <div class="col-image-content h-100">
          <v-img
            :lazy-src="defaultImagePath"
            :src="imageSrc"
            class="ma-1 ma-sm-2 ma-md-3"
            max-height="175"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <div class="user-col pt-2 mx-3 d-flex word-break">
            <UserMuted class="d-flex"></UserMuted>
            <DateMuted class="d-flex"></DateMuted>
          </div>
        </div>
      </v-col>
      <v-col
        class="pl-1 pl-sm-4 pl-lg-5 pl-xl-6 pr-0 pt-0"
        cols="10"
        sm="7"
        md="8"
      >
        <div class="col-main-content h-100 d-flex flex-column ml-5 ml-sm-1">
          <div class="post-top-content pt-2 pb-1">
            <div class="break-word pl-0 font-weight-thin body-2">
              {{ `${index + 1}. ${displayURL}` }}
            </div>
          </div>
          <div class="post-content-main">
            <div class="title">
              {{ title }}
            </div>
            <div class="body-1 pt-1">
              {{ displayDescription }}
            </div>
          </div>
          <div class="word-break d-flex ml-0 flex-wrap mt-2 d-sm-none">
            <UserMuted class="d-flex"></UserMuted>
            <DateMuted class="d-flex"></DateMuted>
          </div>
          <div class="post-content-bottom ">
            <v-chip
              v-for="(tag, idx) in tags"
              :key="idx"
              label
              small
              class="mt-1 ml-0 mr-2"
            >
              {{ tag.title }}
            </v-chip>
          </div>
        </div>
      </v-col>
      <v-col cols="2" md="1" class="pl-0">
        <div class="vote-content h-100">
          <v-icon>mdi-thumb-up</v-icon>
          <v-icon>mdi-thumb-down</v-icon>
        </div></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
import instance from "../main";
import UserMuted from "src/components/UserMuted";
import DateMuted from "src/components/DateMuted";

export default {
  name: "Post",
  components: {
    UserMuted,
    DateMuted
  },
  props: {
    index: {
      type: Number
    },
    title: {
      type: String
    },
    link: {
      type: String,
      default: ""
    },
    description: {
      type: String
    },
    tags: {
      type: Array
    }
  },
  data() {
    return {
      previewImage: undefined,
      previewTitle: undefined,
      previewDescription: undefined,
      defaultImagePath: require("@/assets/mystery.png")
    };
  },

  computed: {
    displayDescription() {
      //If the post has a description use that. If not used the scrapped description
      let postDescription = this.description
        ? this.description
        : this.previewDescription;

      //If the preview description is undefined return null
      return postDescription ? postDescription : "";
    },

    imageSrc() {
      //If image preview is null - not undefined - meaning we attempted to get the image and it
      //returned null, then we return the default image path as the actual image. If the preview
      //image has not returned yet, return it to keep the image pointing to that source and blurring
      //
      return this.previewImage === null
        ? this.defaultImagePath
        : this.previewImage;
      //return this.previewImage ? this.previewImage : this.defaultImagePath;
    },
    displayURL() {
      const url = new URL(this.link);
      return url.hostname;
    }
  },

  async mounted() {
    const data = await instance.post("preview", {
      url: this.link
    });
    const previewParams = data.data;
    this.previewImage = previewParams.image;
    this.previewTitle = previewParams.title;
    this.previewDescription = previewParams.description;
  }
};
</script>

<style scoped>
.border-right {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.border-left {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}

.vote-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

/* Use h-100 in this component so all the columns scale together*/
.h-100 {
  height: 100%;
}

.border-radius-8 {
  border-radius: 0.5rem !important;
}

.col-image-content {
  display: flex;
  flex-direction: column !important;
  justify-content: center;
}

.col-image {
  flex: 1;
}

.user-col {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.break-word {
  word-break: break-word;
}

.post-content-bottom {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.bottom-content {
  display: flex;
  align-items: center;
}

.post-top-content {
  align-items: center;
}

.img-fluid {
  max-height: 100%;
  height: auto;
}

.post-content-main {
  flex: 1;
}

.post-image {
}

.word-break {
  word-break: break-all;
}
</style>

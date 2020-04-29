<template>
  <v-card raised class="my-3 border-radius-8">
    <v-row>
      <v-col cols="3" class="pr-0 d-none d-sm-flex flex-column">
        <div class="col-image-content h-100">
          <v-img :src="imageSrc" class="ma-1 ma-sm-2 ma-md-3" max-height="175">
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
            <DateMuted
              :dateDisplay="dateSincePosting"
              class="d-flex"
            ></DateMuted>
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
            <DateMuted
              class="d-flex"
              :dateDisplay="dateSincePosting"
            ></DateMuted>
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
          <v-btn icon>
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-thumb-down</v-icon>
          </v-btn>
        </div></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
import instance from "src/main";
import UserMuted from "src/components/UserMuted";
import DateMuted from "src/components/DateMuted";
import { timeFormat } from "src/utils/display";

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
    },
    previewImageURL: {
      type: String
    },
    previewTitle: {
      type: String
    },
    previewDescription: {
      type: String
    },
    postId: {
      type: Number,
      required: true
    },
    getPreview: {
      type: Boolean,
      default: false
    },
    datePosted: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      previewImageData: this.previewImageURL,
      previewTitleData: this.previewTitle,
      previewDescriptionData: this.previewDescription,
      defaultImagePath: require("@/assets/mystery.png"),
      previewReturned: !this.getPreview
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

    dateSincePosting() {
      return timeFormat(this.datePosted);
    },

    imageSrc() {
      //If image preview is null - not undefined - meaning we attempted to get the image and it
      //returned null, then we return the default image path as the actual image. If the preview
      //image has not returned yet, return it to keep the image pointing to that source and blurring
      //

      //This will just give it a loading symbol
      if (!this.previewReturned) {
        return "";
      }

      return this.previewImageData
        ? this.previewImageData
        : this.defaultImagePath;
    },
    displayURL() {
      const url = new URL(this.link);
      return url.hostname;
    }
  },

  async mounted() {
    if (this.getPreview) {
      try {
        const data = await instance.post("preview", {
          post_id: this.postId
        });
        const previewParams = data.data;

        this.previewImageData = previewParams.preview_image_url;
        this.previewTitleData = previewParams.preview_title;
        this.previewDescriptionData = previewParams.preview_description;
      } finally {
        this.previewReturned = true;
      }
    }
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

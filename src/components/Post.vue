<template>
  <v-card raised class="my-3 border-radius-8">
    <v-row>
      <v-col cols="4" sm="3" class="pr-0">
        <div class="col-image-content h-100">
          <v-img
            :lazy-src="defaultImagePath"
            :src="imageSrc"
            class="ma-1 ma-sm-2 ma-md-3"
            max-height="200"
            contain
          ></v-img>
          <div class="col-tag pt-2">
            <div class="bottom-content">
              <v-icon color="grey lighten-1" small>
                mdi-account-circle
              </v-icon>
              <div class="px-2 font-weight-thin caption">User here</div>
            </div>

            <div class="bottom-content">
              <v-icon color="grey lighten-1" small>
                mdi-calendar
              </v-icon>
              <div class="px-2 font-weight-thin caption">
                Date here
              </div>
            </div>
            <!-- <v-chip
              v-for="(tag, idx) in tags"
              :key="idx"
              label
              small
              class="ma-1"
            >
              {{ tag.title }}
            </v-chip> -->
          </div>
        </div>
      </v-col>
      <v-col
        class="pl-1 pl-sm-4 pl-lg-5 pl-xl-6 pr-0 pt-0"
        cols="6"
        sm="7"
        md="8"
      >
        <div class="col-main-content h-100 d-flex flex-column">
          <div class="post-top-content">
            <v-subheader class="break-word pl-0">
              {{ `${index + 1}. ${displayURL}` }}
            </v-subheader>
          </div>
          <div class="post-content-main">
            <h5>
              {{ title }}
            </h5>
            <p>
              {{ displayDescription }}
            </p>
          </div>
          <div class="post-content-bottom">
            <v-chip
              v-for="(tag, idx) in tags"
              :key="idx"
              label
              small
              class="mt-1 mx-1"
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
export default {
  name: "Post",
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
      return this.previewImage;
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
  flex-direction: column;
  justify-content: flex-end;
}

.col-image {
  flex: 1;
}

.col-tag {
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
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
</style>

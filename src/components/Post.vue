<template>
  <v-card raised class="my-3 border-radius-8">
    <v-row>
      <v-col cols="4" sm="3" class="ml-2 pr-0">
        <div class="col-image-content h-100">
          <!-- <div class="col-image px-5 pt-5 pb-1 mx-auto">
            <v-img :lazy-src="defaultImagePath" :src="imageSrc"></v-img>
          </div> -->
          <div class="col-tag pt-2">
            <Tag
              v-for="(tag, idx) in tags"
              icon="mdi-tag"
              :closeable="false"
              :key="idx"
            >
              {{ tag.title }}
            </Tag>
          </div>
        </div>
      </v-col>
      <v-col class="pl-1 pl-sm-4 pl-lg-5 pl-xl-6 pr-0 pt-0">
        <div class="col-main-content h-100">
          <div class="post-top-content">
            <v-subheader class="break-word pl-0">
              {{ `${index + 1}. ${displayURL}` }}
            </v-subheader>
          </div>
          <h5>
            {{ title }}
          </h5>
          <p>
            {{ displayDescription }}
          </p>
          <div class="post-content-bottom">
            <div class="bottom-content">
              <v-icon color="grey lighten-1" small>
                mdi-account-circle
              </v-icon>
              <div class="px-2">
                User here
              </div>
            </div>

            <div class="bottom-content">
              <v-icon color="grey lighten-1" small>
                mdi-calendar
              </v-icon>
              <div class="px-2">
                Date here
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="2" lg="1" class="pl-0">
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
import Tag from "src/components/Tag";
export default {
  name: "Post",
  components: {
    Tag
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
</style>

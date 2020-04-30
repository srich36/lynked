<template>
  <!-- Need to set item text and item value 
(specifically item-text) or it breaks after inputting the first value  -->
  <v-combobox
    v-model="tagsSelected"
    :items="getTags()"
    :search-input.sync="search"
    label="Add tags..."
    hide-selected
    multiple
    small-chips
    solo
    item-text="title"
    item-value="count"
    :filter="filterSearch"
  >
    <template v-slot:prepend-inner>
      <v-tooltip bottom class="stretch-prepend">
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-tag-multiple</v-icon>
        </template>
        Add tags to filter your search
      </v-tooltip>
      <v-divider vertical class="mr-2 pl-2"></v-divider>
    </template>

    <template v-slot:no-data>
      <v-list-item>
        <span class="subheading">Create &nbsp; </span>
        <Tag
          :color="`${colors[nonce % colors.length]} lighten-3`"
          :closeable="false"
        >
          {{ search }}
        </Tag>
      </v-list-item>
    </template>
    <template v-slot:selection="{ attrs, item, index }">
      <Tag
        :count="item.count"
        closeable
        @close="removeTag(item)"
        :color="getColor(index)"
        >{{ item.title }}</Tag
      >
    </template>
    <template v-slot:item="{ index, item }">
      <Tag :count="item.count" :closeable="false">
        {{ item.title }}
      </Tag>
      <v-spacer></v-spacer>
      <v-list-item-action>
        <v-btn icon>
          <v-icon>mdi-check</v-icon>
        </v-btn>
      </v-list-item-action>
    </template>
  </v-combobox>
</template>

<script>
import Tag from "src/components/Tag";
import instance from "src/main";

export default {
  name: "TagBox",
  components: {
    Tag
  },
  data() {
    return {
      tagsSelected: [],
      colors: ["green", "purple", "indigo", "cyan", "teal", "orange"],
      tags: [
        {
          title: "Tech",
          count: 1
        },
        {
          title: "Med",
          count: 2
        }
      ],
      search: null,
      nonce: 0
    };
  },
  watch: {
    tagsSelected(newTags, oldTags) {
      //Need this here so it does not execute again when tagsSelected
      //is modified in the map
      if (newTags.length === oldTags.length) return;

      //Combobox returns strings on created so
      //We want to turn that into an object with the form { title, count to
      //match what the API returns}
      this.tagsSelected = newTags.map(tag => {
        if (typeof tag === "string") {
          tag = {
            title: tag,
            count: 0
          };

          //this.items.push(tag);
        }

        return tag;
      });
      this.filterDuplicates();
      this.search = "";
      this.nonce = this.tagsSelected.length;
      this.$emit("tags-updated", this.tagsSelected);
    },

    search() {
      this.searchForTags();
    }
  },
  methods: {
    getTags() {
      return this.tags;
    },
    removeTag(item) {
      const index = this.tagsSelected.map(tag => tag.title).indexOf(item.title);
      this.tagsSelected.splice(index, 1);
      this.nonce--;
      this.$emit("tags-updated", this.tagsSelected);
    },

    getColor(index) {
      return `${this.colors[index % this.colors.length]} lighten-3`;
    },
    //Once search is filtered server-side no-filter should be set on the combobox
    filterSearch(item, searchString) {
      return item.title.toLowerCase().includes(searchString.toLowerCase());
    },

    async searchForTags() {
      try {
        const data = await instance.get("tags", {});
        console.log(data);
        this.tags = data.data;
      } catch (e) {
        console.error(e);
      }
    },

    filterDuplicates() {
      this.tagsSelected = this.tagsSelected.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj["title"]).indexOf(obj["title"]) === pos;
      });
    }
  }
};
</script>

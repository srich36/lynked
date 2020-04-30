<template>
  <v-text-field
    v-model="search"
    label="Search for links..."
    clear-icon="mdi-close"
    type="text"
    solo
    @focus="focused = true"
    @blur="focused = false"
  >
    <template v-slot:prepend-inner>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon
            v-on="on"
            :color="focused ? 'blue' : undefined"
            :large="focused"
            >mdi-magnify</v-icon
          >
        </template>
        Search for link
      </v-tooltip>
      <v-divider vertical class="mr-2 pl-2"></v-divider>
    </template>
    <template v-slot:append>
      <v-icon @click="clearSearch" :large="focused">mdi-close</v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
      focused: false
    };
  },
  watch: {
    search(newVal) {
      this.$emit("search-changed", newVal);
    }
  },
  methods: {
    clearSearch() {
      this.search = "";
    }
  }
};
</script>

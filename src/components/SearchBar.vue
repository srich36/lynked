<template>
  <v-text-field
    v-model="search"
    label="Search for links..."
    clear-icon="mdi-close"
    type="text"
    solo
  >
    <template v-slot:prepend-inner>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-magnify</v-icon>
        </template>
        Search for link
      </v-tooltip>
      <v-divider vertical class="mr-2 pl-2"></v-divider>
    </template>
    <template v-slot:append>
      <v-icon @click="clearSearch">mdi-close</v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    clearSearch() {
      this.search = "";
    }
  }
};
</script>

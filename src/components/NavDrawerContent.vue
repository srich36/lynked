<template>
  <div>
    <router-link to="/">
      <v-img
        class="ma-4"
        src="~@/assets/logo200.png"
        max-height="200"
        contain
      ></v-img>
    </router-link>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group v-model="group" active-class="text--accent-4">
        <NavDrawerListItem
          link="/"
          text="Home"
          icon="mdi-home"
        ></NavDrawerListItem>
        <NavDrawerListItem
          link="/post"
          text="Create Post"
          icon="mdi-pencil"
        ></NavDrawerListItem>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import NavDrawerListItem from "src/components/NavDrawerListItem";
export default {
  name: "NavDrawerContent",
  components: {
    NavDrawerListItem
  },
  data: () => ({
    group: ""
  })
};
</script>

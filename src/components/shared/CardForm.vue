<template>
  <v-card class="elevation-12 login-card">
    <v-toolbar dark class="primary" flat>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <slot></slot>
      </v-form>
      <slot name="form-subcontent"> </slot>
    </v-card-text>
    <v-card-actions class="d-flex">
      <slot name="form-actions"> </slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardForm",
  props: {
    title: {
      type: String,
      default: "Form"
    }
  }
};
</script>

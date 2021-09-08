<template>
  <v-card>
    <v-text-field v-model="title" outlined @keypress.enter="searchBlog">
      <template v-slot:prepend-inner>
        <v-icon class="searchIcon">search</v-icon>
      </template>
      <template v-slot:append>
        <v-progress-circular
          indeterminate
          color="primary"
          size="20"
          v-if="loading"
        />
      </template>
    </v-text-field>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      loading: false,
    };
  },
  methods: {
    searchBlog() {
      console.log("searchBlog!");
    },
  },
};
</script>

<style>
.searchIcon {
  cursor: pointer;
}
</style>

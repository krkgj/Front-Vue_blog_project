<template>
  <v-card height="56px">
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
      loading: true,
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

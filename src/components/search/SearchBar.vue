<template>
  <div>
    <v-text-field v-model="title" outlined @keypress.enter="searchBlog">
      <template v-slot:prepend-inner>
        <v-icon>search</v-icon>
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
  </div>
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

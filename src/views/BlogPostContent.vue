<template>
  <v-container class="mt-16">
    <v-row>
      <v-toolbar-title>{{ postContent.title }}</v-toolbar-title>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BlogPostContent",
  data() {
    return {};
  },
  props: {
    postContent: {
      type: Object,
      default: "",
    },
  },
  mounted() {
    console.log(this.postContent);
  },
};
</script>

<template>
  <v-container class="my-16">
    <v-row class="mt-2">
      <v-card-title class="ma-0 pa-0">{{ postContent.title }}</v-card-title>
    </v-row>
    <v-row>
      <v-card-subtitle class="mx-0 px-0 grey--text">
        작성일 : {{ postContent.createtime }}
      </v-card-subtitle>
    </v-row>
    <v-row>
      <v-card-text class="mx-0 px-0">{{ postContent.content }}</v-card-text>
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
      default: "",
    },
  },
  mounted() {
    console.log(this.postContent);
  },
};
</script>

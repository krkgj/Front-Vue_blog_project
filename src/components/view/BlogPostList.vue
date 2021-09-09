<template>
  <div>
    <v-card
      class="mx-auto my-5"
      max-width="95%"
      elevation="5"
      shaped
      style="cursor:pointer"
      v-for="(post, i) in postList"
      :key="i"
    >
      <v-card-title>
        {{ post.title }}
      </v-card-title>

      <v-card-subtitle v-for="(tag, i) in post.tags" :key="i">
        ddd
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" text>
          읽어보기
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text class="text-truncate">
            {{ post.content }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import PostList from "@/components/datas/boardPostList";
export default {
  data() {
    return {
      show: false,
      postList: PostList,
    };
  },
};
</script>

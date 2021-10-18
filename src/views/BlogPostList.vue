<template>
  <v-container class="mt-14">
    <v-card
      class="mx-auto my-3"
      max-width="95%"
      elevation="5"
      shaped
      v-for="(post, index) in postList"
      :key="post.seq"
    >
      <v-card-title
        style="cursor:pointer"
        @click="goPostContent($event)"
        :id="post.seq"
      >
        {{ post.title }}
      </v-card-title>
      <v-chip-group class="ml-3 my-0">
        <v-chip v-for="(tag, i) in post.tags" :key="i">
          {{ tag }}
        </v-chip>
      </v-chip-group>

      <v-card-text> 등록날짜 : {{ post.createtime }} </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon @click="showContentTruncate($event)" :id="index">
          <v-icon>
            {{ post.show ? "mdi-chevron-up" : "mdi-chevron-down" }}
          </v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="post.show">
          <v-divider></v-divider>

          <v-card-text class="text-truncate">
            {{ post.content }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
// import PostList from "@/components/datas/boardPostList";
import { mapMutations } from "vuex";
import axios from "axios";

const localAxios = axios.create({
  baseURL: "http://localhost:9944/api",
});

export default {
  data() {
    return {
      postList: [],
    };
  },

  methods: {
    // vuex의 모든 mutation 갖고옴
    ...mapMutations({ SET_CATEGORY_LIST: "NavStore/SET_CATEGORY_LIST" }),

    showContentTruncate(e) {
      console.log(e.currentTarget.id);
      let id = e.currentTarget.id;
      this.postList[id].show = !this.postList[id].show;
    },

    // e.currentTarget시에는 class, id등 DOM 요소에서 사용할 수 있는 요소명으로 넣어줘야한다.
    // axios로 postList에서 seq값을 where 절로 던져 seq에 해당하는 데이터를 갖고와야한다.
    goPostContent(e) {
      let seq = parseInt(e.currentTarget.id);
      let postContent;
      // console.log(seq);
      this.postList.forEach((postEntity) => {
        if (postEntity.seq === seq) {
          postContent = postEntity;
        }
      });

      this.$router.push({
        name: "BlogPostContent",
        params: { postContent: postContent },
      });
    },
  },

  // computed: {
  //   shows: {
  //     get() {},
  //     set() {},
  //   },
  // },

  // vue가 마운트 되었을 때?
  async mounted() {
    // 게시글 내림차순 정렬
    await localAxios
      .get("/post?sort-direction=desc&sort-by=createtime")
      .then((res) => {
        this.postList = res.data;
      });

    // postList의 각 요소에 show라는 키로 false 값을 set 한다.
    this.postList.forEach((element) => {
      if (element.tags != null) {
        element.tags = element.tags.replaceAll('"', "").split(",");
      }
      this.$set(element, "show", false);
    });

    this.SET_CATEGORY_LIST({
      list: this.postList,
    });
  },
};
</script>

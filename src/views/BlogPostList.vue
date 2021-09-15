<template>
  <v-container class="mt-14">
    <v-card
      class="mx-auto my-3"
      max-width="95%"
      elevation="5"
      shaped
      style="cursor:pointer"
      v-for="(post, index) in postList"
      :key="post.seq"
    >
      <v-card-title>
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
import PostList from "@/components/datas/boardPostList";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      postList: PostList,
    };
  },

  methods: {
    showContentTruncate(e) {
      // console.log(e.currentTarget.id);
      let id = e.currentTarget.id;
      this.postList[id].show = !this.postList[id].show;
    },
    ...mapMutations({
      SET_CATEGORY_LIST: "NavStore/SET_CATEGORY_LIST",
    }),
  },

  // computed: {
  //   shows: {
  //     get() {},
  //     set() {},
  //   },
  // },

  // vue가 마운트 되었을 때?
  mounted() {
    // 게시글 내림차순 정렬
    this.postList.forEach((element) => {
      console.log(element.seq);
    });
    console.log("before sort");
    this.postList.sort((e1, e2) => {
      if (
        Number(e1.createtime.substr(0, 4)) != Number(e2.createtime.substr(0, 4))
      )
        return -(
          Number(e1.createtime.substr(0, 4)) -
          Number(e2.createtime.substr(0, 4))
        );
      else if (
        Number(e1.createtime.substr(5, 2)) != Number(e2.createtime.substr(5, 2))
      )
        return -(
          Number(e1.createtime.substr(5, 2)) -
          Number(e2.createtime.substr(5, 2))
        );
      else if (
        Number(e1.createtime.substr(8, 2)) != Number(e2.createtime.substr(8, 2))
      )
        return -(
          Number(e1.createtime.substr(8, 2)) -
          Number(e2.createtime.substr(8, 2))
        );
      else if (
        Number(e1.createtime.substr(11, 2)) !=
        Number(e2.createtime.substr(11, 2))
      )
        return -(
          Number(e1.createtime.substr(11, 2)) -
          Number(e2.createtime.substr(11, 2))
        );
      else if (
        Number(e1.createtime.substr(14, 2)) !=
        Number(e2.createtime.substr(14, 2))
      )
        return -(
          Number(e1.createtime.substr(14, 2)) -
          Number(e2.createtime.substr(14, 2))
        );
      else if (
        Number(e1.createtime.substr(17, 2)) !=
        Number(e2.createtime.substr(17, 2))
      )
        return -(
          Number(e1.createtime.substr(17, 2)) -
          Number(e2.createtime.substr(17, 2))
        );
    });

    this.postList.forEach((element) => {
      console.log(element.seq);
    });

    // postList의 각 요소에 show라는 키로 false 값을 set 한다.
    this.postList.forEach((element) => {
      this.$set(element, "show", false);
    });

    this.SET_CATEGORY_LIST({
      list: this.postList,
    });
  },
};
</script>

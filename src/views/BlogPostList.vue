<template>
  <v-container class="mt-14">
    <v-card
      class="mx-auto my-3"
      max-width="95%"
      elevation="5"
      shaped
      style="cursor:pointer"
      v-for="post in postList"
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
        <v-btn icon @click="showContentTruncate($event)" :id="post.seq">
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
export default {
  data() {
    return {
      postList: PostList,
    };
  },

  methods: {
    showContentTruncate(e) {
      let id = e.currentTarget.id;
      this.postList[id - 1].show = !this.postList[id - 1].show;
    },
  },

  // computed: {
  //   shows: {
  //     get() {},
  //     set() {},
  //   },
  // },

  // vue가 마운트 되었을 때?
  mounted() {
    // this.postList.forEach((value) => {
    //   console.log(value.createtime);

    //   if(value.createtime.substr(0, 4) === value.createtime.substr(0, 4))
    //   console.log(value.createtime.substr(5, 2));
    //   console.log(value.createtime.substr(8, 2));
    //   console.log(value.createtime.substr(11, 2));
    //   console.log(value.createtime.substr(14, 2));
    //   console.log(value.createtime.substr(17, 2));
    // });

    this.postList.sort((e1, e2) => {
      console.log(e1.createtime);
      console.log("==============");
      console.log(e2.createtime);
      console.log("==============");
    });
    // postList의 각 요소에 show라는 키로 false 값을 set 한다.
    this.postList.forEach((element) => {
      this.$set(element, "show", false);
    });

    this.$store.commit("setCategoryList", { data: this.postList });
  },
};
</script>

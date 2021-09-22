<template>
  <v-navigation-drawer v-model="drawer" absolute temporary width="300px">
    <v-list nav>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../../assets/kyeongjin.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text-h7">KyeongJin Kim</v-list-item-title>
          <v-list-item-subtitle>krkgj0526@naver.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-btn
        small
        fab
        class="mx-2 mb-3"
        target="_blank"
        href="mailto:krkgj0526@naver.com"
      >
        <v-icon large aria-label="view-in-github">
          mdi-email
        </v-icon>
      </v-btn>
      <v-btn
        small
        fab
        class="mx-2 mb-3"
        :href="`https://github.com/krkgj`"
        target="_blank"
      >
        <v-icon large aria-label="view-in-github">
          mdi-github
        </v-icon>
      </v-btn>
      <v-btn
        small
        fab
        class="mx-2 mb-3"
        :href="`https://www.instagram.com/10526kyeong/`"
        target="_blank"
      >
        <v-icon large aria-label="view-in-instagram">
          mdi-instagram
        </v-icon>
      </v-btn>
      <v-btn
        small
        fab
        class="mx-2 mb-3"
        :href="`https://www.facebook.com/profile.php?id=100003295351510`"
        target="_blank"
      >
        <v-icon large aria-label="view-in-facebook">
          mdi-facebook
        </v-icon>
      </v-btn>

      <v-divider></v-divider>

      <v-list-item
        active-class="deep-purple--text text--accent-2"
        style="cursor:pointer"
        @click="routingMain"
      >
        <v-list-item-icon>
          <v-icon v-text="navMain.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{ navMain.title }}</v-list-item-title>

        <v-list-item-title>({{ navMain.count }})</v-list-item-title>
      </v-list-item>

      <v-list-item-group active-class="deep-purple--text text--accent-2">
        <v-list-item v-for="(category, i) in categoryList" :key="i">
          <v-list-item-icon>
            <v-icon v-text="boardIcon"></v-icon>
          </v-list-item-icon>

          <v-list-item-title>{{ category.title }}</v-list-item-title>
          <v-list-item-title>({{ category.count }})</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider></v-divider>
    <v-list-item class="justify-center">
      <v-btn
        rounded
        class="mx-2"
        size="20px"
        @click="$emit('show-writing-editor')"
      >
        글쓰기
      </v-btn>
    </v-list-item>
  </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<script>
import categoryList from "@/components/datas/boardCategorys";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      categoryList: categoryList,
      navMain: {
        icon: "mdi-home",
        title: "메인 화면",
        path: "/blog",
        count: 44,
      },
      boardIcon: "keyboard_arrow_right",
    };
  },
  methods: {
    ...mapMutations({ SET_DRAWER_STATE: "DrawerStore/SET_DRAWER_STATE" }),

    // url path가 /와 같으면 router push 하지 않는다. /가 아닐 때만 routing push
    routingMain() {
      let path = window.location.pathname;

      this.SET_DRAWER_STATE({ isDrawer: false });
      if (path !== "/") {
        this.$router.push("/");
      }
    },
  },
  computed: {
    // mapGetters는 computed에 위치?
    ...mapGetters({
      GET_DRAWER_STATE: "DrawerStore/GET_DRAWER_STATE",
    }),

    // nav의 show or hidden을 정하는 drawer를 vuex store에 정의하여두었다.
    drawer: {
      get() {
        return this.GET_DRAWER_STATE;
      },
      set(data) {
        return this.SET_DRAWER_STATE({ isDrawer: data });
      },
    },
  },
};
</script>

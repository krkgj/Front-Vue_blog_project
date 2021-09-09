<template>
  <v-navigation-drawer v-model="drawer" absolute temporary width="350">
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

      <v-list-item>dd</v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>{{ navMain.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{ navMain.title }}</v-list-item-title>

        <v-list-item-title>({{ navMain.count }})</v-list-item-title>
      </v-list-item>

      <v-list-item-group active-class="deep-purple--text text--accent-2">
        <v-list-item v-for="(category, i) in categorys" :key="i">
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
import categorys from "@/components/datas/boardCategorys";

export default {
  data() {
    return {
      categorys: categorys,
      navMain: {
        icon: "mdi-home",
        title: "메인 화면",
        routeLink: "",
        count: 44,
      },
      boardIcon: "keyboard_arrow_right",
    };
  },
  methods: {},
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(data) {
        return this.$store.commit("updateDrawer", { data: data });
      },
    },
  },
};
</script>

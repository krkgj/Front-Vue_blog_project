<template>
  <v-navigation-drawer v-model="show" absolute temporary width="350">
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
      <v-list-item-group active-class="deep-purple--text text--accent-2">
        <v-list-item v-for="(item, i) in navList" :key="i">
          <v-list-item-icon>
            <v-icon v-text="boardIcon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-title>({{ item.count }})</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider></v-divider>
    <v-list-item class="justify-center">
      <v-btn rounded class="mx-2" size="20px">
        글쓰기
      </v-btn>
    </v-list-item>
  </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<script>
export default {
  data() {
    return {
      boardIcon: "keyboard_arrow_right",
      navList: [
        { icon: "mdi-home", title: "메인 화면", routeLink: "", count: 44 },
        {
          title: "JAVA/Spring",
          routeLink: "",
          count: 4,
        },
        {
          title: "Javascript/VueJS",
          routeLink: "",
          count: 3,
        },
        {
          title: "Git",
          routeLink: "",
          count: 2,
        },
        {
          title: "Linux/Ubuntu",
          routeLink: "",
          count: 7,
        },
        {
          title: "MySQL/Oracle",
          routeLink: "",
          count: 2,
        },
        {
          title: "코딩 테스트",
          routeLink: "",
          count: 9,
        },
      ],
    };
  },
  computed: {
    show: {
      get() {
        return this.$store.state.show;
      },
      set(data) {
        return this.$store.commit("updateDrawer", { data: data });
      },
    },
  },
};
</script>

<template>
  <v-navigation-drawer v-model="show" absolute temporary>
    <v-list nav dense>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../../assets/kyeongjin.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>KyeongJin Kim</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item-group active-class="deep-purple--text text--accent-2">
        <v-list-item v-for="(item, i) in navList" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-title>({{ item.count }})</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { icon: "mdi-home", title: "메인 화면", routeLink: "", count: 44 },
        {
          icon: "developer_board",
          title: "JAVA/Spring",
          routeLink: "",
          count: 4,
        },
        {
          icon: "developer_board",
          title: "Javascript/VueJS",
          routeLink: "",
          count: 3,
        },
        {
          icon: "developer_board",
          title: "Git",
          routeLink: "",
          count: 2,
        },
        {
          icon: "developer_board",
          title: "Linux/Ubuntu",
          routeLink: "",
          count: 7,
        },
        {
          icon: "developer_board",
          title: "MySQL/Oracle",
          routeLink: "",
          count: 2,
        },
        {
          icon: "developer_board",
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

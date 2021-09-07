<template>
  <v-navigation-drawer v-model="show" absolute temporary>
    <v-list nav dense>
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <v-list-item v-for="(item, i) in navList" :key="i">
          <v-list-item-icon>
            <v-icon large v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>&nbsp;&nbsp; {{ item.title }} </v-list-item-title>
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
        { icon: "mdi-home", title: "메인 화면", routeLink: "" },
        { icon: "", title: "", routeLink: "" },
        { icon: "", title: "", routeLink: "" },
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

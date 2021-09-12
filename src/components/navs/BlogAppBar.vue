<template>
  <v-card>
    <v-app-bar
      white
      class="pa-0 ma-0"
      style="width:100%"
      prominent
      fixed
      hide-on-scroll
    >
      <v-app-bar-nav-icon
        class="float-left align-self-center"
        @click="$store.commit('updateDrawer', { data: true })"
      ></v-app-bar-nav-icon>
      <!-- <v-avatar size="40">
        <v-img src="../../assets/kyeongjin.png"></v-img>
      </v-avatar> -->
      <v-toolbar-title
        style="font-weight:700;width:100%;cursor:pointer;"
        class="justify-center align-self-center"
        @click="routeMain"
      >
        피곤한 개발자의 개발 일기 😎
      </v-toolbar-title>
    </v-app-bar>
    <slot name="searchBar"></slot>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show: this.$store.state.show,
    };
  },
  props: {
    appBarDrawer: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setAppBarState() {},
    routeMain() {
      console.log("adww");
    },
  },
};
</script>

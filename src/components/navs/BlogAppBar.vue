<template>
  <v-card class="overflow-hidden">
    <v-app-bar white class="pa-0 ma-0">
      <v-app-bar-nav-icon
        @click="$store.commit('updateDrawer', { data: true })"
      ></v-app-bar-nav-icon>
      <v-avatar size="40">
        <v-img src="../../assets/kyeongjin.png"></v-img>
      </v-avatar>
      <v-toolbar-title style="font-weight:700"
        >&nbsp;&nbsp;김경진의 개발 블로그</v-toolbar-title
      > </v-app-bar
    ><slot name="searchBar"></slot>
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
  },
};
</script>

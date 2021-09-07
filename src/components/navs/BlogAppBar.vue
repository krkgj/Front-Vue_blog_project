<template>
  <v-card class="overflow-hidden">
    <v-app-bar white class="pa-0 ma-0">
      <v-app-bar-nav-icon
        @click="$store.commit('updateDrawer', { data: true })"
      ></v-app-bar-nav-icon>
      <v-badge avatar bordered overlap>
        <template v-slot:badge>
          <v-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
          </v-avatar>
        </template>

        <v-avatar size="40">
          <v-img src="../../assets/kyeongjin.png"></v-img>
        </v-avatar>
      </v-badge>
      <v-toolbar-title
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

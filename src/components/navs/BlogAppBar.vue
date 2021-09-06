<template>
  <v-card class="overflow-hidden">
    <v-app-bar dark class="pa-0 ma-0">
      <v-app-bar-nav-icon
        @click="$store.commit('changeDrawerState', { caller: 'appBar' })"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>&nbsp;&nbsp;김경진의 개발 블로그</v-toolbar-title>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: this.$store.state.drawer,
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

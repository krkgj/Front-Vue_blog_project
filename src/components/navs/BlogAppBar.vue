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
        @click="setDrawerState"
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
import { mapMutations } from "vuex";
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
    // 뮤테이션 사용 mapMutation은 methods에 위치해야한다.
    ...mapMutations({ SET_DRAWER_STATE: "DrawerStore/SET_DRAWER_STATE" }),
    routeMain() {},
    setDrawerState() {
      this.SET_DRAWER_STATE({
        isDrawer: true,
      });
    },
  },
};
</script>

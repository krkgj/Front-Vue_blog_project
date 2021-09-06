<template>
  <div>
    <v-row>
      <v-col cols="12" class="mx-4 mb-4"
        ><blog-navigation-bar> </blog-navigation-bar
      ></v-col>
      <v-col cols="12"><search-bar></search-bar></v-col>
    </v-row>
    <v-row>
      <v-col cols="12"> <blog-main></blog-main></v-col>
    </v-row>
    <v-row>
      <v-col cols="12"> <blog-footer></blog-footer></v-col>
    </v-row>
  </div>
</template>

<script>
import BlogNavigationBar from "@/components/navs/BlogNavigationBar";
import SearchBar from "@/components/search/SearchBar";
import BlogMain from "@/components/view/BlogMain";
import BlogFooter from "@/components/navs/BlogFooter";
export default {
  components: {
    BlogNavigationBar,
    SearchBar,
    BlogMain,
    BlogFooter,
  },
};
</script>

<style>
.left {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 40px 0;
  overflow: hidden;
}
.top {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 40px 0;
  overflow: hidden;
}
.bottom {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 250px;
  height: 100%;
  padding: 40px 0;
  overflow: hidden;
}
</style>

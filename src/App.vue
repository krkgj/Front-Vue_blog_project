<template>
  <v-app>
    <blog-navigation>
      <!-- -->
    </blog-navigation>

    <blog-app-bar
      ><template v-slot:searchBar><search-bar></search-bar> </template
    ></blog-app-bar>

    <blog-editor></blog-editor>
    <!-- Sizes your content based upon application components -->
    <blog-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </blog-main>
    <blog-footer></blog-footer>
  </v-app>
</template>

<script>
import BlogNavigation from "@/components/navs/BlogNavigation";
import BlogAppBar from "@/components/navs/BlogAppBar";
import BlogMain from "@/components/view/BlogMain";
import BlogFooter from "@/components/navs/BlogFooter";
import BlogEditor from "@/components/view/BlogEditor";
import SearchBar from "@/components/search/SearchBar";
export default {
  name: "App",
  data() {
    return {
      pDrawer: false,
    };
  },

  components: {
    BlogNavigation,
    BlogAppBar,
    BlogMain,
    BlogFooter,
    BlogEditor,
    SearchBar,
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
#app {
  font-family: "Noto Sans KR", sans-serif;
}
</style>

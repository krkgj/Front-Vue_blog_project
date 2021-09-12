<template>
  <div>
    <v-app>
      <blog-navigation @show-writing-editor="showWritingEditor">
        <!-- -->
      </blog-navigation>

      <blog-app-bar>
        <template v-slot:searchBar>
          <search-bar></search-bar>
        </template>
      </blog-app-bar>

      <v-main v-if="showEditor">
        <blog-writing></blog-writing>
      </v-main>
      <v-main v-else>
        <!-- <blog-main>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </blog-main> -->
        <blog-post-list></blog-post-list>
      </v-main>

      <!-- Sizes your content based upon application components -->

      <blog-footer></blog-footer>
    </v-app>
  </div>
</template>

<script>
import BlogNavigation from "@/components/navs/BlogNavigation";
import BlogAppBar from "@/components/navs/BlogAppBar";
import BlogFooter from "@/components/navs/BlogFooter";
import SearchBar from "@/components/search/SearchBar";
import BlogWriting from "@/views/BlogWriting";
import BlogPostList from "@/views/BlogPostList";
export default {
  name: "App",
  data() {
    return {
      showEditor: false,
    };
  },

  components: {
    BlogNavigation,
    BlogAppBar,
    BlogFooter,
    BlogWriting,
    SearchBar,
    BlogPostList,
  },
  created() {},
  methods: {
    showWritingEditor() {
      this.$store.commit("updateDrawer", { data: false });
      this.showEditor = !this.showEditor;
    },
  },
};
</script>

<style>
#app {
  font-family: "Noto Sans KR", sans-serif;
}
</style>

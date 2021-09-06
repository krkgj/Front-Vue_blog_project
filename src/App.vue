<template>
  <v-app>
    <blog-navigation>
      <!-- -->
    </blog-navigation>

    <blog-app-bar> </blog-app-bar>

    <!-- Sizes your content based upon application components -->
    <blog-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </blog-main>

    <blog-footer app> </blog-footer>
  </v-app>
</template>

<script>
import BlogNavigation from "@/components/navs/BlogNavigation";
import BlogAppBar from "@/components/navs/BlogAppBar";
import BlogMain from "@/components/view/BlogMain";
import BlogFooter from "@/components/navs/BlogFooter";
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
  },
  created() {},
  methods: {},
};
</script>

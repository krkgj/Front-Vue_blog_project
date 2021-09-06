<template>
  <div>
    <router-link to="/blog" exact>GO TO BLOG!</router-link> |
    <router-link to="/home" exact>Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},
  created() {
    console.log(process.env);
    console.log("시발");
  },
};
</script>

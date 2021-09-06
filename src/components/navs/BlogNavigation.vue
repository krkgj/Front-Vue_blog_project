<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list nav dense>
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>&nbsp;&nbsp;메인</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>&nbsp;&nbsp;dd</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set() {
        if (this.$store.state.drawer === true) console.log("Set!");
        // this.$store.commit("changeDrawerState", { caller: "navigation" });
      },
    },
  },
};
</script>

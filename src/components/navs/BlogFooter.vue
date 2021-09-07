<template>
  <v-footer white padless heigth="500px">
    <!-- <v-card-text>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
    </v-card-text> -->

    <v-card-text class="dark--text ">
      <v-row>
        <v-col cols="10">
          <v-btn
            rounded
            class="mx-2"
            size="20px"
            :href="`https://github.com/krkgj`"
            target="_blank"
          >
            go to github
          </v-btn>
          <v-btn
            rounded
            size="20px"
            :href="`https://www.instagram.com/10526kyeong/`"
            target="_blank"
          >
            go to instagram
          </v-btn>
        </v-col>
        <v-col cols="2" class="text-center">
          © {{ new Date().getFullYear() }} — <strong>krkgj</strong> all rights
          reserved
        </v-col>
      </v-row>
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ["ddd", "dd"],
    };
  },
};
</script>

<style></style>

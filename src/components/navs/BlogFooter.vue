<template>
  <v-footer white class="py-2">
    <!-- <v-card-text>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
    </v-card-text> -->

    <v-card-text class="dark--text">
      <v-row align="center" justify="center">
        <v-btn
          small
          fab
          class="mx-2 mb-3"
          target="_blank"
          href="mailto:krkgj0526@naver.com"
        >
          <v-icon large aria-label="view-in-github">
            mdi-email
          </v-icon>
        </v-btn>

        <v-btn
          small
          fab
          class="mx-2 mb-3"
          :href="`https://github.com/krkgj`"
          target="_blank"
        >
          <v-icon large aria-label="view-in-github">
            mdi-github
          </v-icon>
        </v-btn>
        <v-btn
          small
          fab
          class="mx-2 mb-3"
          :href="`https://www.instagram.com/10526kyeong/`"
          target="_blank"
        >
          <v-icon large aria-label="view-in-instagram">
            mdi-instagram
          </v-icon>
        </v-btn>
        <v-btn
          small
          fab
          class="mx-2 mb-3"
          :href="`https://www.facebook.com/profile.php?id=100003295351510`"
          target="_blank"
        >
          <v-icon large aria-label="view-in-facebook">
            mdi-facebook
          </v-icon>
        </v-btn>
      </v-row>
      <v-row align="center" justify="center">
        © {{ new Date().getFullYear() }} — &nbsp;<strong>krkgj</strong>&nbsp;all
        rights reserved
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

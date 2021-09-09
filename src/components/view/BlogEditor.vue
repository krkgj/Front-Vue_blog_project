<template>
  <v-card>
    <v-sheet>
      <v-subheader>Editor</v-subheader>
      <editor :options="options" height="900px"></editor>
    </v-sheet>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      options: {
        language: "ko",
      },
      height: "700",
    };
  },
};
</script>

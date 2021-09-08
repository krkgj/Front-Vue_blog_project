<template>
  <v-sheet>
    <v-subheader>Editor</v-subheader>
    <editor :options="options"></editor>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      options: {
        language: "ko",
      },
    };
  },
};
</script>

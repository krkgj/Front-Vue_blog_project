<template>
  <v-container class="mt-16">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-btn @click="submit">
        저장
      </v-btn>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="게시글 제목"
        required
      ></v-text-field>

      <v-select v-model="category" label="카테고리" required></v-select>

      <v-divider></v-divider>
      <v-card>
        <v-sheet color="#fff">
          <editor :options="options" height="700px"></editor>
        </v-sheet>
      </v-card>
      <v-row>
        <v-col cols="1" class="py-6">
          <v-text-field
            v-model="tag"
            label="태그 추가"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="py-6" cols="11"></v-col>
      </v-row>
    </v-form>
  </v-container>
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
<style></style>

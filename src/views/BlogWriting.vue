<template>
  <v-container class="mt-16">
    <v-form class="ma-0 pa-0" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="게시글 제목*"
        required
      ></v-text-field>

      <v-select v-model="category" label="카테고리*" required></v-select>

      <v-divider></v-divider>

      <v-row class="my-2 mx-0">
        <v-col class="mt-2 pa-0" cols="12">
          <v-sheet color="#fff">
            <editor
              ref="toastEditor"
              :options="options"
              height="700px"
            ></editor>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row class="mt-2 mx-0 px-0">
        <v-col class="mx-0 px-0" cols="2">
          <v-text-field
            v-model="tagTextField"
            label="태그 추가"
            required
            outlined
            @keyup.enter="addTag"
          ></v-text-field>
        </v-col>
        <v-col class="my-0 pa-0" cols="10">
          <v-chip-group class="ml-3" column>
            <!-- 태그 클릭 시 삭제 -->
            <v-chip v-for="(tag, i) in tagList" :key="i" @click="removeTag(i)">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
      <v-row class="mx-0 pt-0 mb-2">
        <v-col class="text-right mx-0 px-0">
          <v-btn text-align x-large @click="submitd">
            저장
          </v-btn>
        </v-col>
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
      tagTextField: "",
      tagList: [],
      submit: {
        title: "",
        category: "",
        content: "",
        tags: [],
      },
    };
  },
  methods: {
    // 텍스트 입력 후 엔터키 입력 시 태그 추가되는 메소드
    addTag() {
      let tag = "";

      if (this.tagTextField.indexOf("#") == -1) {
        tag = tag.concat("#", this.tagTextField);
      } else {
        tag = this.tagTextField;
      }
      this.tagList.push(tag);
      this.tagTextField = "";
    },

    // 추가된 태그 삭제하는 메소드
    removeTag(index) {
      this.tagList.splice(index, 1);
    },

    submitd() {
      alert(this.$refs.toastEditor.invoke("getHTML"));
    },
  },
};
</script>
<style></style>

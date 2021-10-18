<template>
  <v-container class="mt-16">
    <v-form
      class="ma-0 pa-0"
      ref="form"
      @submit="regist"
      method="post"
      lazy-validation
    >
      <v-text-field
        v-model="submit.title"
        :counter="10"
        label="게시글 제목*"
        required
      ></v-text-field>

      <v-select
        v-model="category"
        label="카테고리*"
        :items="categoryList"
        item-text="title"
        item-value="category"
        return-object
        single-line
        required
      ></v-select>

      <v-divider></v-divider>

      <v-row class="my-2 mx-0">
        <v-col class="mt-2 pa-0" cols="12">
          <v-sheet color="#fff">
            <editor
              ref="toastEditor"
              @change="inputContent"
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
            <v-chip
              v-for="(tag, i) in submit.tags"
              :key="i"
              @click="removeTag(i)"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
      <v-row class="mx-0 pt-0 mb-2">
        <v-col class="text-right mx-0 px-0">
          <v-btn text-align x-large @click="regist">
            글쓰기
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import CategoryList from "@/components/datas/boardCategorys";
import axios from "axios";

const localAxios = axios.create({
  baseURL: "http://localhost:9944/api",
});

export default {
  data() {
    return {
      options: {
        language: "ko",
      },
      tagTextField: "",
      valueas: {},
      categoryList: [],
      category: "",
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
      this.submit.tags.push(tag);
      this.tagTextField = "";
    },

    // 추가된 태그 삭제하는 메소드
    removeTag(index) {
      this.tagList.splice(index, 1);
    },

    inputContent() {
      this.submit.content = this.$refs.toastEditor.invoke("getHTML");
    },
    // 글쓰기 버튼 클릭 => submit? regist?
    regist() {
      console.log("타이틀 - " + this.submit.title);
      console.log("본문 - " + this.submit.content);
      console.log("태그들 - " + this.submit.tags.toString);
      console.log("카테고리 - " + this.category.category);
      let jsonData = {
        seq: 33,
        title: this.submit.title,
        content: this.submit.content,
        tags: this.submit.tags.join(),
        category: this.category.category,
      };

      localAxios
        .post("/post", jsonData, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log("등록완료!!!");
          }
        });
    },
  },
  mounted() {
    this.categoryList = CategoryList;
  },
};
</script>
<style></style>

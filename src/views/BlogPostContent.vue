<template>
  <v-container class="mt-16">
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
          저장
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

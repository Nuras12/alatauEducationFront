<template>
  <CatalogBlog :blogs="blogs" @search="search" />
</template>
<script setup lang="ts">
import CatalogBlog from "@components/blog/catalog.vue";
import { onMounted, ref } from "vue";
import {
  getBlogs,
  IDataBlogs,
  IResponseBlogs,
  searchBlogs,
} from "@utils/blogs";
import { useHead } from "@unhead/vue";

useHead({
  title: "Блог - Alatau Education",
  meta: [{
    name: 'description',
    content: 'Исследуйте наш блог, где мы делимся полезными статьями, лайфхаками и свежими новостями об образовании в Китае и не только. Узнайте о последних трендах и советах для успешного обучения за рубежом.'
  }]
});

const blogs = ref<IDataBlogs[]>([]);

const search = async (query: string) => {
  const { data: response }: { data: IResponseBlogs } = await searchBlogs(query);
  blogs.value = response.data;
};

onMounted(async () => {
  const { data: response }: { data: IResponseBlogs } = await getBlogs();
  blogs.value = response.data;
});
</script>

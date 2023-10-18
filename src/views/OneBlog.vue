<template>
  <BlogInfo v-if="blog" :blog="blog" />
</template>
<script setup lang="ts">
import BlogInfo from "@components/blog/info.vue";
import { onMounted, ref } from "vue";
import { getBlogArticleByPath, IOneBlog } from "@utils/blogs";
import { useRoute } from "vue-router";

import { useHead } from "@unhead/vue";

const route = useRoute();
const blog = ref<IOneBlog>(null);
const articlePath = route.params.articlePath.toString();

onMounted(async () => {
  const { data: response }: { data: IOneBlog } = await getBlogArticleByPath(
    articlePath
  );
  blog.value = response;

  useHead({
    title: blog.value.innerTitle,
    meta: [{ name: "description", content: blog.value.description }],
  });

  console.log(response.created_at);
});
</script>

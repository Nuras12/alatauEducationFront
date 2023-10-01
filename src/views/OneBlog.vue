<template>
  <BlogInfo
      v-if="blog"
    :blog="blog"
  />
</template>
<script setup lang="ts">
import BlogInfo from "../components/BlogInfo.vue";
import {onMounted, ref} from "vue";
import {getBlogArticle, IOneBlog} from "../utils/blogs";
import {useRoute} from "vue-router";

const route = useRoute()
const blog = ref<IOneBlog>(null)
const article = route.params.article.toString()

onMounted(async() => {
  const { data: response }: { data: IOneBlog } = await getBlogArticle(article)
  blog.value = response
  console.log(response.created_at)
})

</script>
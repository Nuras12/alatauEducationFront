<template>
<CatalogBlog
  :blogs="blogs"
  @search="search"
/>
</template>
<script setup lang="ts">
import CatalogBlog from "../components/catalogBlog.vue";
import {onMounted, ref} from "vue";
import {getBlogs, IDataBlogs, IResponseBlogs, searchBlogs} from "../utils/blogs.ts";

const blogs = ref<IDataBlogs[]>([])

const search = async (query: string) => {
  const { data: response }: { data: IResponseBlogs } = await searchBlogs(query)
  blogs.value = response.data
}

onMounted(async() => {
  const { data: response }: { data: IResponseBlogs } = await getBlogs()
  blogs.value = response.data
})

</script>
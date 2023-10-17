<template>
  <section class="catalog">
    <h2 class="catalog__title">Блог</h2>
    <div class="catalog__finder catalog__finder_blog">
      <form
        @submit.prevent="search"
        class="catalog__searchbar searchbar searchbar_blog"
      >
        <input
          type="text"
          name="searchbar__input"
          class="searchbar__input"
          placeholder="Поиск"
          v-model="input"
        />
        <button class="searchbar__btn">
          <img src="@assets/search.png" alt="Find" class="searchbar__btn-img" />
        </button>
      </form>

      <div class="catalog__filter filter filter_blog">
        <p class="filter__text">Фильтр:</p>
        <span class="filter__chose"></span>
        <select name="filter__select" id="filterSelect" class="filter__select">
          <option value="">Город</option>
          <option value="">Город 2</option>
          <option value="">Город 3</option>
          <option value="">Город 4</option>
        </select>
      </div>
    </div>

    <div class="catalog__content">
      <div
        class="card"
        v-if="props.blogs.length"
        v-for="item in props.blogs"
        :key="item.id"
        @click="selectBlog(item.path)"
      >
        <img :src="`${baseUrl}${item.pic.path}`" alt="card" class="card__img" />
        <h3 class="card__title">{{ item.title }}</h3>
      </div>
      <h1 v-else>Ничего не найдено</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { baseUrl } from "@plugins/http";
import { IDataBlogs } from "@utils/blogs";
import router from "@router/router";

const input = ref("");
const props = defineProps<{
  blogs: IDataBlogs[];
}>();
const emit = defineEmits(["search"]);

const search = () => {
  emit("search", input.value);
};
const selectBlog = (path: string) => {
  console.log({ path });

  router.push({
    name: "one-blog",
    params: {
      articlePath: path,
    },
  });
};
</script>

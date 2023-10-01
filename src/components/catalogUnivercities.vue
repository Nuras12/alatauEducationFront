<template>
  <section class="catalog">
    <div class="catalog__finder">
      <div class="catalog__searchbar searchbar">
        <input type="text" name="searchbar__input" class="searchbar__input" placeholder="Поиск">
        <button class="searchbar__btn"><img src="../assets/search.png" alt="Find" class="searchbar__btn-img"></button>
      </div>

      <div class="catalog__filter filter">
        <p class="filter__text">Фильтр: </p>
        <span class="filter__chose"></span>
        <select name="filter__select" id="filterSelect" class="filter__select">
          <option :value="item.id" v-for="item in cities" :key="item.id">{{ item.nameRu }}</option>
        </select>
      </div>
    </div>

    <div class="catalog__content">
      <div class="card" v-for="item in universities" :key="item.id">
        <img :src="`${baseUrl}/${item.pic.path}`" alt="card" class="card__img">
        <h3 class="card__title">{{ item.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ICities, IUniversities} from "../utils/universities";
import {computed} from "vue";
import {baseUrl} from "../plugins/http";

const props = defineProps<{
  universities: IUniversities[],
  cities: ICities[]
}>()
const universities = computed(() => props.universities)
const cities = computed(() => props.cities)

</script>
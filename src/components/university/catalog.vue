<template>
  <section class="catalog">
    <div class="catalog__finder">
      <div class="catalog__searchbar searchbar">
        <input
          type="text"
          name="searchbar__input"
          class="searchbar__input"
          placeholder="Поиск"
          v-model="searchStr"
          @keydown="onEnter"
        />
        <button class="searchbar__btn" @click="onEnter">
          <img src="@assets/search.png" alt="Find" class="searchbar__btn-img" />
        </button>
      </div>

      <div class="catalog__filter filter">
        <p class="filter__text">Фильтр:</p>
        <span class="filter__chose"></span>
        <!--TODO: refactor with v-model -->
        <select
          name="filter__select"
          id="filterSelect"
          class="filter__select"
          @change="(e) => setCityId((<HTMLInputElement>e.target).value)"
        >
          <option :value="'all'" selected>Все города</option>
          <option :value="item.id" v-for="item in cities" :key="item.id">
            {{ item.nameRu }}
          </option>
        </select>
      </div>
    </div>

    <div class="catalog__content">
      <div
        class="card"
        v-for="item in universities"
        :key="item.id"
        @click="selectUniversity(item.path)"
      >
        <img
          :src="`${baseUrl}/${item.pic.path}`"
          alt="card"
          class="card__img"
        />
        <h2 class="card__title">{{ item.title }}</h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ICities, IUniversities, getUniversities } from "@utils/universities";
import { computed, ref } from "vue";
import { baseUrl } from "@plugins/http";
import router from "@/router/router";

const props = defineProps<{
  universities: IUniversities[];
  cities: ICities[];
  setCityId: (cityId: string) => void;
  search: Function;
}>();

const universities = computed(() => props.universities);
const cities = computed(() => props.cities);
const setCityId = computed(() => props.setCityId);

let searchStr = "";

const onEnter = (e: Event) => {
  if (e instanceof KeyboardEvent && ["Enter", "NumpadEnter"].includes(e.code)) {
    props.search(searchStr);
  }

  if (e instanceof MouseEvent && e.type === "click") {
    props.search(searchStr);
  }
};

const selectUniversity = (path: string) => {
  router.push({
    name: "one-university",
    params: {
      universityPath: path,
    },
  });
};
</script>

<template>
  <Preview />
  <Catalog
    :universities="universities"
    :cities="cities"
    :setCityId="setId"
    :search="search"
  />
</template>
<script setup lang="ts">
import Preview from "@components/university/preview.vue";
import Catalog from "@components/university/catalog.vue";
import {
  getCities,
  getUniversities,
  ICities,
  IUniversities,
} from "@utils/universities";
import { onMounted, ref, watch } from "vue";
import { useHead } from "@unhead/vue";
useHead({
  title: "Университеты Китая - Alatau Education",
  meta: [
    {
      name: "description",
      content:
        "Узнайте больше о университетах Китая с Alatau Education. История, академическая программа, возможности для международных студентов и многое другое. Исследуйте учебные заведения Китая прямо сейчас.",
    },
  ],
});

const universities = ref<IUniversities[]>([]);
const cities = ref<ICities[]>([]);
const currentCityId = ref(null);
const searchString = ref("");

const search = (str: string) => (searchString.value = str);
const setId = (id: string) => (currentCityId.value = id);

onMounted(async () => {
  const { data: responseU } = await getUniversities();
  universities.value = responseU.data as IUniversities[];
  const { data: responseC } = await getCities();
  cities.value = responseC.data as ICities[];
});

watch([currentCityId, searchString], async () => {
  const { data: responseU } = await getUniversities(currentCityId.value, searchString.value);
  universities.value = responseU.data as IUniversities[];
});
</script>

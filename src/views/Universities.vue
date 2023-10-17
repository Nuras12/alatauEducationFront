<template>
  <PreviewUnivercities />
  <CatalogUnivercities
    :universities="universities"
    :cities="cities"
    :setCityId="setId"
    :search="search"
  />
</template>
<script setup lang="ts">
import PreviewUnivercities from "@components/university/previewUnivercities.vue";
import CatalogUnivercities from "@components/university/catalogUnivercities.vue";
import {
  getCities,
  getUniversities,
  ICities,
  IUniversities,
} from "@utils/universities";
import { onMounted, ref, watch } from "vue";

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

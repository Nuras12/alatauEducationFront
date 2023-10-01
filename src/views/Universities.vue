<template>
  <PreviewUnivercities/>
  <CatalogUnivercities
    :universities="universities"
    :cities="cities"
  />
</template>
<script setup lang="ts">
import PreviewUnivercities from "../components/previewUnivercities.vue";
import CatalogUnivercities from "../components/catalogUnivercities.vue";
import {getCities, getUniversities, ICities, IUniversities} from "../utils/universities";
import {onMounted, ref} from "vue";

const universities = ref<IUniversities[]>([])
const cities = ref<ICities[]>([])

onMounted(async() => {
  const { data: responseU } = await getUniversities()
  universities.value = responseU.data as IUniversities[]
  const { data: responseC } = await getCities()
  cities.value = responseC.data as ICities[]
  console.log(cities.value)
})
</script>
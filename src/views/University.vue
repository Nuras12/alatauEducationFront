<template>
  <Info v-if="universityItem" :university-item="universityItem" />
  <About />
</template>
<script setup lang="ts">
import Info from "@components/university/item.vue";
import About from "@components/universityAbout.vue";

import { onMounted, ref } from "vue";
import { getUniversityByPath, IOneUniversity } from "@utils/universities";
import { useRoute } from "vue-router";

const route = useRoute();
const universityItem = ref<IOneUniversity>(null);
const universityPath = route.params.universityPath.toString();

onMounted(async () => {
  const university = await getUniversityByPath(universityPath);
  universityItem.value = university;
});
</script>

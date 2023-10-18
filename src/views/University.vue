<template>
  <Info v-if="universityItem" :university-item="universityItem" />
  <About />
</template>
<script setup lang="ts">
import Info from "@components/university/item.vue";
import About from "@components/university/topList.vue";

import { onMounted, ref } from "vue";
import { getUniversityByPath, IOneUniversity } from "@utils/universities";
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";

const route = useRoute();
const universityItem = ref<IOneUniversity>(null);
const universityPath = route.params.universityPath.toString();

onMounted(async () => {
  const university = await getUniversityByPath(universityPath);
  universityItem.value = university;

  useHead({
    title: universityItem.value.innerTitle,
    meta: [{ name: "description", content: universityItem.value.description }],
  });
});
</script>

<template>
  <UnivercityInfo v-if="universityItem" :university-item="universityItem" />
  <UnivercityAbout />
</template>
<script setup lang="ts">
import UnivercityInfo from "@components/university/item.vue";
import UnivercityAbout from "@components/univercityAbout.vue";

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

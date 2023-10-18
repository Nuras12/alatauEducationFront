<template>
  <MainAboutUs />
  <QuestionsAboutUs />
  <BestAboutUs />
</template>
<script setup lang="ts">
import MainAboutUs from "@components/about_us/mainAboutUs.vue";
import QuestionsAboutUs from "@components/about_us/questionsAboutUs.vue";
import BestAboutUs from "@components/about_us/bestAboutUs.vue";

import { useHead } from "@unhead/vue";
useHead({
  title: "О нас - Alatau Education",
  meta: [
    {
      name: "description",
      content:
        "Alatau Education - надежный партнер в вопросах поступления в лучшие университеты Китая. Наша миссия - сопровождение вас на каждом этапе сотрудничества, начиная с выбора подходящего университета и заканчивая заселением в общежитие. Узнайте больше о нашей команде и ценностях.",
    },
  ],
});
</script>

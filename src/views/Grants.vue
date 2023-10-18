<template>
  <PreviewGrants />
  <TypesGrants />
</template>
<script setup lang="ts">
import PreviewGrants from "@components/grants/preview.vue";
import TypesGrants from "@components/grants/types.vue";
import { useHead } from "@unhead/vue";
useHead({
  title: "Гранты на обучение в Китай - Alatau Education",
  meta: [
    {
      name: "description",
      content:
        "Поступите на грант в лучшие университеты Китая с Alatau Education! Никаких экзаменов! У нас есть возможности для студентов с синим аттестатом, а также дополнительные шансы для обладателей красного аттестата. Начните ваш путь в образование с нами.",
    },
  ],
});
</script>

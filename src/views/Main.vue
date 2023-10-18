<template>
  <InfoMain />
  <ArchiveMain />
  <ServicesMain />
  <AddonsMain />
  <ProgramsMain />
  <UniversMaxViewed />
</template>

<script setup lang="ts">
import ProgramsMain from "@components/home/programsMain.vue";
import UniversMaxViewed from "@components/university/topList.vue";
import ServicesMain from "@components/home/servicesMain.vue";
import InfoMain from "@components/home/InfoMain.vue";
import AddonsMain from "@components/home/addonsMain.vue";
import ArchiveMain from "@components/home/archiveMain.vue";

import { useHead } from "@unhead/vue";
useHead({
  title: "Обучение в Китае с грантами Alatau Education",
  meta: [
    {
      name: "description",
      content: "Alatau Education - образовательная компания в Казахстане, предоставляющая гранты на бесплатное образование в высокорейтинговых и аккредитованных университетах. Учеба в Китае для казахстанцев после 11 класса. Языковые курсы, бакалавр и магистратура в Китае.",
    },
  ],
});
</script>

<style scoped></style>

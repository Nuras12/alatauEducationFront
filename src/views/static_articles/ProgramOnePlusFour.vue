<template>
  <ProgramPreview />
  <ProgramAbout />
</template>
<script setup lang="ts">
import ProgramPreview from "@components/services/static_pages/1+4/programPreview.vue";
import ProgramAbout from "@components/services/static_pages/1+4/programAbout.vue";
import { useHead } from "@unhead/vue";

useHead({
  title: "Программа 1+4 - Alatau Education",
  meta: [{
    name: 'description',
    content: 'Узнайте о программе 1+4 с Alatau Education. Мы предоставляем подготовку к HSK, помогаем вам адаптироваться в Китае, собрать необходимые документы и успешно поступить на бесплатное обучение. Начните ваш путь в образовании с нами.'
  }]
});
</script>

<template>
  <Preview />
  <ListOurServices />
  <VisaOurServices />
</template>
<script setup lang="ts">
import { useHead } from "@unhead/vue";
useHead({
  title: "Наши услуги - Alatau Education",
  meta: [
    {
      name: "description",
      content: "Узнайте больше о наших услугах и программах Alatau Education. Мы предоставляем разнообразные возможности для поступления в университеты Китая, включая программы 1+4, 0.5+4 и магистратуру, бакалаврат, докторантуру и другие уровни образования. Наши эксперты помогут вам сделать первый шаг к качественному образованию.",
    },
  ],
});
import Preview from "@components/services/preview.vue";
import ListOurServices from "@components/services/catalog.vue";
import VisaOurServices from "@components/services/visa.vue";
</script>

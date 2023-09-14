<template>
  <BannerMain/>
  <TopSngMain/>
  <ServicesMain/>
  <GrantsMain/>
  <BooksMain/>
  <UniversitiesMain/>




</template>

<script setup lang="ts">
import BannerMain from "../components/bannerMain.vue";
import TopSngMain from "../components/topSngMain.vue";
import ServicesMain from "../components/servicesMain.vue";
import GrantsMain from "../components/grantsMain.vue";
import BooksMain from "../components/booksMain.vue";
import UniversitiesMain from "../components/UniversitiesMain.vue";



</script>

<style scoped>
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
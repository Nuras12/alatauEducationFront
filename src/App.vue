<template>
  <Header />
  <router-view />
  <Footer />
  <FormPage v-if="modal" />
</template>

<script setup lang="ts">
import Header from "@components/general/Header.vue";
import Footer from "@components/general/Footer.vue";
import FormPage from "@components/general/FormPage.vue";
import { useFormModal } from "@store/formModal";
import { storeToRefs } from "pinia";

const formModal = useFormModal();
const { modal } = storeToRefs(formModal);
</script>

<style></style>

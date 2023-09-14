<template>
  <Header/>
  <router-view/>
  <Footer/>
  <FormPage v-if="modal"/>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import FormPage from "./components/FormPage.vue";
import {useFormModal} from "./store/formModal.ts";
import {storeToRefs} from "pinia";

const formModal = useFormModal()
const { modal } = storeToRefs(formModal)

</script>

<style>

</style>

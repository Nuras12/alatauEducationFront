<template>
  <div class="wrapper">
    <HeaderMain/>
    <div class="mt-[80px]">
      <RouterView/>
    </div>
    <MarqueeText/>
    <FooterFormMain/>
    <FooterMain/>
    <FormModal v-if="modal"/>
  </div>
</template>

<script setup lang="ts">
import HeaderMain from "./components/headerMain.vue";
import FooterMain from "./components/footerMain.vue";
import FooterFormMain from "./components/footerFormMain.vue";
import MarqueeText from "./components/marqueeText.vue";
import FormModal from "./components/FormModal.vue";
import {useFormModal} from "../src/store/formModal.ts";
import {storeToRefs} from "pinia";

const formModal = useFormModal()
const {modal} = storeToRefs(formModal)
</script>

<style>
* {
  scroll-behavior: smooth;
}
</style>

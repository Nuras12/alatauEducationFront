<template>
  <section class="info">
    <div class="info__content">
      <p class="info__text"><span class="fw-600">Высшее </span><br>
        <span class="fs-italic">образование </span><br>
        <span class="fw-800">в Китае</span> <img src="../assets/infoSvg.svg" alt="univer" class="info__hat"></p>
      <button class="info__btn" @click="formModal.showModal()">Оставить заявку</button>
    </div>

    <div class="info__img"></div>
    <div class="info__japan-text"></div>
  </section>
</template>

<script setup lang="ts">
import {useFormModal} from "../store/formModal";

const formModal = useFormModal()
</script>
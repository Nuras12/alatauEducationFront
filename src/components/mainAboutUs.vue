<template>
  <section class="about">
    <div class="about__content">
      <h3 class="about__title"><span class="fw-600">Чем </span>
        <span class="fs-italic">мы </span>
        <span class="fw-800">занимаемся? </span></h3>
      <p class="about__text">Alatau Education предоставляет услуги по поступлению в лучшие университеты Китая. Мы будем сопровождать вас на каждом этапе сотрудничества: от выбора подходящего университета до заселения в общежитие.</p>
      <button class="about__btn" @click="formModal.showModal()">Оставить заявку</button>
    </div>

    <div class="about__logo"></div>
  </section>
</template>
<script setup lang="ts">
import {useFormModal} from "../store/formModal.ts";

const formModal = useFormModal()
</script>
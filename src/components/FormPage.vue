<template>
  <section class="form-section">
    <div class="form-section__content">
      <form class="form">
        <a @click="formModal.hideModal()" class="formBack univer__link"><img style="transform: rotate(180deg)" src="../assets/sectionArrow.svg" alt="arrow">Назад</a>
        <div class="form__logo"></div>
        <h3 class="form__title">Оставить заявку</h3>

        <input type="text" class="form__input" placeholder="Имя*">
        <input type="text" class="form__input" placeholder="Телефон*">

        <button class="form__button">Отправить</button>
      </form>

      <h2 class="form-section__title">Консультации по обучению в Китае</h2>
    </div>
  </section>
</template>
<script setup lang="ts">
import {useFormModal} from "../store/formModal";

const formModal = useFormModal()
</script>
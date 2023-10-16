<template>
  <section class="addons">
    <div class="addons__head section__head">
      <h3 class="section__title">Что входит в грант</h3>
      <a @click="toRoute('grants')" class="section__link"
        >Узнать больше <img src="@assets/sectionArrow.svg" alt="arrow"
      /></a>
    </div>

    <div class="addons__content">
      <div class="addon">
        <h4 class="addon__title">Обучение</h4>
        <p class="addon__text">Бесплатное обучение на 5 лет</p>
      </div>

      <div class="addon">
        <h4 class="addon__title">Общежитие</h4>
        <p class="addon__text">Бесплатное двухместное общежитие на 5 лет.</p>
      </div>

      <div class="addon">
        <h4 class="addon__title">Стипендия</h4>
        <p class="addon__text">
          Стипендия в размере 2500 юаней, 12 месяцов в году, 5 лет.
        </p>
      </div>

      <div class="addon">
        <h4 class="addon__title">Медстрахование</h4>
        <p class="addon__text">Бесплатное медицинское страхование на 5 лет.</p>
      </div>

      <div class="addon">
        <h4 class="addon__title">Практика</h4>
        <p class="addon__text">
          Бесплатная двухмесячная практика в компаниях в двух городах.
        </p>
      </div>

      <div class="addon">
        <h4 class="addon__title">Литература</h4>
        <p class="addon__text">Бесплатные книги, рабочие тетради на 5 лет.</p>
      </div>
    </div>

    <btn class="addons__btn-more btn-more"
      >Посмотреть все <img src="" alt="" class="btn-more__arrow"
    /></btn>
  </section>
</template>
<script setup lang="ts">
import { toRoute } from "@store/useToRoute.js";
</script>

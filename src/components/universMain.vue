<template>
  <section class="univers">
    <div class="univers__head section__head">
      <h3 class="section__title">Университеты</h3>
      <a @click="toRoute('universities')" class="section__link">Узнать больше <img src="../assets/sectionArrow.svg" alt="arrow"></a>
    </div>

    <div class="univers__content">
      <div class="univer">
        <img src="../assets/univer1.png" alt="" class="univer__img">
        <h4 class="univer__title">Пекинский университет</h4>

        <a href="" class="univer__link">Читать далее <img src="../assets/sectionArrow.svg" alt="arrow"></a>
      </div>

      <div class="univer__line"></div>

      <div class="univer">
        <img src="../assets/univer2.png" alt="" class="univer__img">
        <h4 class="univer__title">Шаньханьский
          университет</h4>

        <a href="" class="univer__link">Читать далее <img src="../assets/sectionArrow.svg" alt="arrow"></a>
      </div>

      <div class="univer__line"></div>

      <div class="univer">
        <img src="../assets/univer3.png" alt="" class="univer__img">
        <h4 class="univer__title">Гонгконгский
          университет</h4>

        <a href="" class="univer__link">Читать далее <img src="../assets/sectionArrow.svg" alt="arrow"></a>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {toRoute} from "../store/useToRoute.js";
</script>
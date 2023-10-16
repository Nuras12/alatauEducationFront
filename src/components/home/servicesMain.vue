<template>
  <section class="services">
    <div class="services__head section__head">
      <h3 class="section__title">Наши услуги</h3>
      <a @click="toRoute('ourServices')" class="section__link"
        >Узнать больше <img src="@assets/sectionArrow.svg" alt="arrow"
      /></a>
    </div>

    <div class="services__content">
      <div class="service">
        <img src="@assets/service1.png" alt="" class="service__img" />
        <h4 class="service__name">
          Подбор университетов <br />
          и поиск грантовых мест
        </h4>
      </div>

      <div class="service">
        <img src="@assets/service2.png" alt="" class="service__img" />
        <h4 class="service__name">HSK курсы</h4>
      </div>

      <div class="service">
        <img src="@assets/service3.png" alt="" class="service__img" />
        <h4 class="service__name">Сбор необходимых документов</h4>
      </div>

      <div class="service">
        <img src="@assets/service4.png" alt="" class="service__img" />
        <h4 class="service__name">Виза и авиабилеты</h4>
      </div>

      <div class="service">
        <img src="@assets/service5.png" alt="" class="service__img" />
        <h4 class="service__name">Встреча в аэропорту</h4>
      </div>

      <div class="service">
        <img src="@assets/service6.png" alt="" class="service__img" />
        <h4 class="service__name">Регистрация на учебу и общежитие</h4>
      </div>
    </div>

    <btn class="services__btn-more btn-more"
      >Посмотреть все <img src="" alt="" class="btn-more__arrow"
    /></btn>
  </section>
</template>
<script setup lang="ts">
import { toRoute } from "@store/useToRoute.js";
</script>

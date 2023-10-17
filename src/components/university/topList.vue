<template>
  <section class="univers univers_univer-about">
    <div class="univers__head section__head">
      <h3 class="section__title section__title_univer-about">Узнайте больше</h3>
      <a href="/universities" class="section__link"
        >Узнать больше <img src="@assets/sectionArrow.svg" alt="arrow"
      /></a>
    </div>
    <div class="univers__content">
      <template v-for="(item, idx) in universities" :key="item.id">
        <div class="univer">
          <img
            :src="item.pic.path"
            alt=""
            class="univer__img"
            @error="replaceByDefault"
          />
          <h5 class="univer__title">{{ item.title }}</h5>
          <a :href="`/universities/${item.path}`" class="univer__link"
            >Читать далее <img src="@assets/sectionArrow.svg" alt="arrow"
          /></a>
        </div>

        <div v-if="idx !== universities.length - 1" class="univer__line"></div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IUniversities, getViewable } from "@utils/universities";
import { onMounted, ref } from "vue";
import img from "@assets/univer1.png";

const universities = ref<IUniversities[]>([]);

const replaceByDefault = (e) => {
  e.target.src = img;
};

onMounted(async () => {
  universities.value = await getViewable();
});
</script>

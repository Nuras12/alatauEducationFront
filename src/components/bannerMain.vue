<template>
  <div class="hidden desktop:block absolute top-0 left-0 z-[-5] w-full h-[740px] bg-alLightBlue">

  </div>
  <div class="pl-[40px] w-full flex flex-col bg-alLightBlue h-full mobile:flex-col tablet:flex-col laptop:flex-row desktop:flex-row">
    <div class="mobile:mt-[70px] tablet:mt-[70px] laptop:mt-[140px] desktop:mt-[140px] flex flex-col gap-[24px]">
      <div :class="$style.text__banner" class="text-alBlue cursor-default">
        <p class="font-[600]">Высшее</p>
        <i>образование</i>
        <div class="flex items-center">
          <p class="font-[600]">в Китае</p>
          <svg width="70" height="56" viewBox="0 0 70 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M38.8605 1.83909C36.7667 0.693216 34.2333 0.693216 32.1395 1.83909L2 18.3333L14.1818 24.9944V39.1799C14.1818 41.7375 15.5767 44.0915 17.8201 45.3198L35.5 55L56.8182 43.3278V24.9944L62.9091 21.6639V42.7778H69V18.3333L38.8605 1.83909ZM56.27 18.3333L35.5 29.7L14.73 18.3333L33.5797 8.01758C34.7762 7.36279 36.2238 7.36279 37.4203 8.01758L56.27 18.3333ZM50.7273 39.7222L35.5 48.0333L22.3564 40.8595C21.0719 40.1584 20.2727 38.8118 20.2727 37.3484V28.325L35.5 36.6667L50.7273 28.325V39.7222Z"
                fill="#2F3EC6" stroke="#2F3EC6"/>
          </svg>
        </div>
      </div>
      <BaseButton
          @click="formModal.showModal()"
          bgColor="#47F244"
          textColor="#13131A"
          text="Оставить заявку"
      />
    </div>
    <div class="w-full flex justify-end object-cover">
      <img src="../assets/bannerImg-1.svg" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./baseButton.vue";
import {useFormModal} from "../store/formModal.ts";

const formModal = useFormModal()
</script>

<style scoped module>
.text__banner {
  font-family: Inter;
  font-size: 68px;
  /*font-weight: 600;*/
  line-height: 68px;
  letter-spacing: -0.02em;
  text-align: left;
}
@media (max-width: 480px) {
  .text__banner {
    font-size: 48px;
    line-height: 45px;
  }
}

</style>
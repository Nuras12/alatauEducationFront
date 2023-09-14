<template>
  <div
      class="flex flex-col w-full desktop:px-[125px] laptop:px-[125px] tablet:px-[25px] mobile:px-[25px] px-[25px] gap-[40px] mt-[50px] desktop:mt-[20px] laptop:mt-[20px]">

    <div
        class="gap-[10px] flex flex-col mobile:flex-col justify-between tablet:items-center laptop:items-center desktop:items-center tablet:flex-row laptop:flex-row desktop:flex-row">
      <h1 class="text-[48px] font-bold" style="line-height: 50px">Что входит в грант</h1>
      <p class="flex items-center gap-[8px] text-alBlue cursor-pointer" @click="toRoute('grants')">Узнать больше <span><svg width="18" height="16"
                                                                                  viewBox="0 0 18 16"
                                                                                  fill="none"
                                                                                  xmlns="http://www.w3.org/2000/svg">
<path
    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928932C10.9526 0.538408 10.3195 0.538408 9.92893 0.928932C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9H17V7H1V9Z"
    fill="#2F3EC6"/>
</svg>
</span></p>
    </div>

    <div class="flex flex-wrap gap-[12px] w-full items-center justify-center">
      <div
          class="flex flex-col desktop:flex-col laptop:flex-col bg-light items-center justify-center gap-[30px] p-[24px] desktop:h-[220px] desktop:w-[300px] laptop:w-[270px] laptop:h-[200px] tablet:flex-row mx-24px w-full"
          v-for="item in 6">
        <h1 class="text-[32px] font-bold self-start">Обучение</h1>
        <p class="desktop:text-xl laptop:text-xl tablet:text-[1.50rem] mobile:text-[1.50rem] text-[1.50rem]">
          Стипендия в размере 2500 юаней, 12 месяцев в году, 5 лет.</p>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script setup lang="ts">
import {toRoute} from "../store/useToRoute.js";
</script>
<template>
  <div class="flex flex-col w-full px-[25px] desktop:px-[128px]">

    <div class=" flex flex-col tablet:flex-row items-start justify-between tablet:items-center">
      <h1 class="text-[48px] font-bold">Университеты</h1>
      <p class="flex items-center gap-[8px] text-alBlue cursor-pointer" @click="toRoute('universities')">Все университеты <span><svg width="18" height="16"
                                                                                     viewBox="0 0 18 16"
                                                                                     fill="none"
                                                                                     xmlns="http://www.w3.org/2000/svg">
<path
    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928932C10.9526 0.538408 10.3195 0.538408 9.92893 0.928932C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9H17V7H1V9Z"
    fill="#2F3EC6"/>
</svg>
</span></p>
    </div>
    <div :items-to-show="1.5" class="hidden laptop:flex gap-[10px] liParent mt-[10px] tablet:mt-0 justify-center items-center">

      <div v-for="slide in 3" :key="slide" class="flex flex-col gap-[20px]">
        <img class="w-[320px] self-start h-auto" src="../assets/mainSlider-1.png" alt="">
        <h1 class="self-start text-[32px] font-bold w-[50px] lineH">Пекинский университет</h1>
        <p class="flex items-center gap-[8px] text-alBlue self-start cursor-pointer">Все университеты <span><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928932C10.9526 0.538408 10.3195 0.538408 9.92893 0.928932C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9H17V7H1V9Z" fill="#2F3EC6"/>
        </svg>
        </span>
        </p>
      </div>

    </div>

    <carousel class="flex laptop:hidden gap-[10px] liParent mt-[10px] tablet:mt-0 justify-center items-center">

      <slide v-for="slide in 3" :key="slide" class="flex flex-col gap-[20px]">
        <img class="w-[320px] self-start h-auto" src="../assets/mainSlider-1.png" alt="">
        <h1 class="self-start text-[32px] font-bold w-[50px] lineH">Пекинский университет</h1>
        <p class="flex items-center gap-[8px] text-alBlue self-start">Все университеты <span><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928932C10.9526 0.538408 10.3195 0.538408 9.92893 0.928932C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9H17V7H1V9Z" fill="#2F3EC6"/>
        </svg>
        </span>
        </p>
      </slide>

    </carousel>

  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {toRoute} from "../store/useToRoute.ts";
</script>

<style scoped>
.liParent li {
  margin-right: 40px;
}
li {
  width: fit-content!important;
}
.lineH {
  line-height: 30px;
}
.firstScroller {
  scroll-snap-align: start;
}
</style>

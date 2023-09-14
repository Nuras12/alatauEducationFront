<template>
  <div
      class="flex flex-col w-full desktop:px-[125px] laptop:px-[125px] tablet:px-[25px] mobile:px-[25px] px-[25px] gap-[40px] mt-[50px] desktop:mt-0 laptop:mt-0">

    <div
        class="flex flex-col mobile:flex-col justify-between tablet:items-center laptop:items-center desktop:items-center tablet:flex-row laptop:flex-row desktop:flex-row">
      <h1 class="text-[48px] font-bold whitespace-nowrap">Наши услуги</h1>
      <p class="flex items-center gap-[8px] text-alBlue cursor-pointer" @click="toRoute('ourServices')">Узнать больше <span><svg width="18" height="16"
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
          class="flex flex-col desktop:flex-col laptop:flex-col bg-light items-center justify-center gap-[30px] p-[24px] desktop:h-[220px] desktop:w-[300px] laptop:w-[270px] laptop:h-[200px] tablet:flex-row-reverse mx-24px w-full"
          v-for="item in 6">
        <svg class="w-[160px] h-[94px] self-start desktop:self-auto" viewBox="0 0 161 95" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M126.062 21.6722L96.0317 0.611816L52.7471 25.1019L42.3568 38.671H36.6401L0 66.5142V94.9974H54.4058H60.0649V77.1208H68.7585V94.9974H77.1747H131.58L131.472 94.8491L160.908 67.0053V38.671H126.062V21.6722ZM17.2505 77.0601H23.8854V85.0028H17.2505V77.0601ZM84.2626 77.0601H77.6277V85.0028H84.2626V77.0601ZM98.1957 77.0601H91.5609V85.0028H98.1957V77.0601ZM31.1837 77.0601H37.8186V85.0028H31.1837V77.0601ZM112.129 77.0601H105.494V85.0028H112.129V77.0601ZM45.1169 77.0601H51.7518V85.0028H45.1169V77.0601Z"
                fill="#2F3EC6"/>
        </svg>
        <p class="desktop:text-xl laptop:text-xl tablet:text-[1.50rem] mobile:text-[1.50rem] text-[1.50rem] font-bold">
          Подбор университетов
          и поиск грантовых мест</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {toRoute} from "../store/useToRoute.js";
</script>
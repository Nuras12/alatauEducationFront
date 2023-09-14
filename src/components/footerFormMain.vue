<template>
  <div class="w-full flex relative flex-col justify-center gap-[40px] items-center h-[336px] bg-alBlue">
    <h1 class="text-[48px] text-white font-bold px-[20px]">Консультация по обучению в Китае</h1>

    <BaseButton
        @click="formModal.showModal()"
        class="z-10 font-bold self-start tablet:self-auto ml-[20px] tablet:ml-0 mb-[40px] tablet:mb-0"
        bgColor="#47F244"
        textColor="#2F3EC6"
        text="Оставить заявку"
    />

    <svg class="object-cover absolute bottom-0 left-0" viewBox="0 0 1745 169" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1490.56 77.6338L1535.68 44.6934L1535.72 44.6084C1545.89 37.1875 1559.65 37.1875 1569.81 44.6084L1744.75 169H863.58L966.305 96.9551C972.688 92.3037 981.332 92.3037 987.717 96.9551L987.744 97.0078L1016.09 117.65L1078.13 72.4883C1084.52 67.8369 1093.16 67.8369 1099.54 72.4883L1179.32 131.958L1357.7 5.56641C1367.86 -1.85547 1381.62 -1.85547 1391.79 5.56641L1490.56 77.6338ZM432.629 169L277.527 63.4277C269.41 57.5244 258.422 57.5244 250.307 63.4277L171.438 120.762L135.408 94.5566L135.375 94.4883C127.26 88.585 116.27 88.585 108.154 94.4883L0.0859375 169H432.629Z" fill="#EEF4FF"/>
    </svg>
  </div>
</template>
<script setup lang="ts">
import {useFormModal} from "../store/formModal.ts";
import BaseButton from "../components/baseButton.vue";

const formModal = useFormModal()
</script>
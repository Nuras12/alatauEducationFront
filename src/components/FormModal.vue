<template>
    <div class="fixed top-0 left-0 z-[1000] w-screen h-screen bg-light items-center justify-center flex">

      <div class="flex gap-[80px] ">
        <div
            class="modalForm flex flex-col items-center relative w-[350px] tablet:w-[550px] justify-center gap-[32px] pb-[60px] pt-[40px]">
          <p @click="formModal.hideModal()"
             class="cursor-pointer absolute -top-[40px] left-3 text-alBlue font-bold text-[16px] flex items-center gap-[8px]"><span><svg
              xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
<path
    d="M17 9C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7L17 9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.29289ZM17 7L1 7L1 9L17 9L17 7Z"
    fill="#2F3EC6"/>
</svg></span> Назад
          </p>
          <img width="134" height="84" src="../assets/Vector.svg" alt="">
          <h1 class="text-[32px] font-bold">Оставить заявку</h1>
          <form class="flex justify-center items-center placeholder-alBlack w-full max-w-[550px] flex-col gap-[16px]">
            <input class="tablet:w-full max-w-[440px] h-[52px] px-[24px] modalInput" type="text" placeholder="Имя*">
            <input class="tablet:w-full max-w-[440px] h-[52px] px-[24px] modalInput" type="text" placeholder="Телефон*">
            <button type="submit"
                    class="bg-alBlue text-white tablet:w-full max-w-[440px] text-start px-[24px] py-[16px] rounded-[8px]">
              Отправить
            </button>
          </form>

        </div>

        <h1 class="self-start text-alBlue font-bold text-[48px] w-96 hidden laptop:block">Консультации по обучению в
          Китае</h1>
      </div>


    </div>
</template>

<script setup lang="ts">

import {useFormModal} from "../store/formModal.ts";

const formModal = useFormModal()

</script>

<style scoped>
.modalForm {
  border-radius: 24px;
  background: #FFF;
  box-shadow: 4px 6px 20px 0px rgba(81, 59, 214, 0.06), 12px 26px 40px 0px rgba(81, 59, 214, 0.04);
}

.modalInput {
  border-radius: 8px;
  border: 0.5px solid rgba(81, 59, 214, 0.60);
  background: #FFF;
}

input {
  outline: none;
}
</style>
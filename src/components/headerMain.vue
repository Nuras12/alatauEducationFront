<template>
  <div
      class="z-[99] bg-alLightBlue fixed top-0 max-w-[1440px] w-full flex gap-[1rem] text-[1rem] h-[80px] items-center justify-between px-[40px]"
      :class="$style.text">
    <HeaderLogo class="cursor-pointer" @click="toRoute('main')"/>
    <ul class="gap-[3rem] items-center justify-center text-alBlue mobile:hidden tablet:hidden laptop:flex desktop:flex hidden">
      <li class="cursor-pointer" @click="toRoute('aboutUs')">О нас</li>
      <li class="cursor-pointer" @click="toRoute('grants')">Гранты в Китай</li>
      <li class="cursor-pointer" @click="toRoute('universities')">Университеты</li>
      <li class="cursor-pointer" @click="toRoute('ourServices')">Наши услуги</li>
      <li class="cursor-pointer" @click="toRoute('blog')">Блог</li>
    </ul>
    <BaseButton
        @click="formModal.showModal()"
        bgColor="#2F3EC6"
        textColor="white"
        text="Оставить заявку"
        class="mobile:hidden tablet:hidden laptop:flex desktop:flex hidden"
    />
    <svg class="block mobile:block tablet:block laptop:hidden desktop:hidden" @click="showMenu"
         width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H18V2H0V0ZM0 5H18V7H0V5ZM0 10H18V12H0V10Z" fill="#513BD6"/>
    </svg>

  </div>

  <div class="z-[1500] top-0 left-0 w-screen h-screen fixed bg-light flex flex-col" v-if="menu">
      <div class="flex items-center justify-between py-[20px] px-[24px]">
        <HeaderLogo/>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" @click="hideMenu">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5001 12.9143L19.293 19.7072L20.7072 18.293L13.9143 11.5001L20.7072 4.70718L19.293 3.29297L12.5001 10.0859L5.70718 3.29297L4.29297 4.70718L11.0859 11.5001L4.29297 18.293L5.70718 19.7072L12.5001 12.9143Z" fill="#513BD6"/>
        </svg>
      </div>
    <ul class="gap-[32px] flex-col flex items-start text-alBlue text-[24px] mt-[36px] ml-[24px]">
      <li class="cursor-pointer" @click="toRoute('aboutUs')">О нас</li>
      <li class="cursor-pointer" @click="toRoute('grants')">Гранты в Китай</li>
      <li class="cursor-pointer" @click="toRoute('universities')">Университеты</li>
      <li class="cursor-pointer" @click="toRoute('ourServices')">Наши услуги</li>
      <li class="cursor-pointer" @click="toRoute('blog')">Блог</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import HeaderLogo from "./headerLogo.vue";
import BaseButton from "./baseButton.vue";
import {useFormModal} from "../store/formModal.ts";
import {toRoute} from "../store/useToRoute.ts";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
const formModal = useFormModal()
const route = useRoute()

const menu = ref(false)

const showMenu = () => menu.value = true
const hideMenu = () => menu.value = false
watch(route, () => {
  hideMenu()
})

</script>

<style scoped module>
.text {
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: -0.03em;
  text-align: left;
}
</style>

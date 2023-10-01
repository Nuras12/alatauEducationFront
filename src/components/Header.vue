<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo" @click="toRoute('main')"></div>

      <a class="header__link" @click="toRoute('aboutUs')">О нас</a>
      <a class="header__link" @click="toRoute('grants')">Гранты в Китай</a>
      <a class="header__link" @click="toRoute('universities')">Университеты</a>
      <a class="header__link" @click="toRoute('ourServices')">Наши услуги</a>
      <a class="header__link" @click="toRoute('blog')">Блог</a>

      <button class="header__button" @click="formModal.showModal()">Оставить заявку</button>

      <div class="header__menu" @click="showMenu"></div>
    </div>
  </header>
  <div class="z-[1500] top-0 left-0 w-screen h-screen fixed bg-light flex flex-col" v-if="menu">
    <div class="flex items-center justify-between py-[20px] px-[24px]">
      <div class="header__logo"></div>
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
import {toRoute} from "../store/useToRoute";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import {useFormModal} from "../store/formModal";
const route = useRoute()
const formModal = useFormModal()
const menu = ref(false)

const showMenu = () => menu.value = true
const hideMenu = () => menu.value = false
watch(route, () => {
  hideMenu()
})

</script>
<template>
  <button class="px-[24px] py-[8px] text-[600] text-white rounded-[8px] w-fit bg-alBlue" :style="style">{{ props.text }}</button>
</template>

<script setup lang="ts">
import {computed} from "@vue/reactivity";
import {ref} from "vue";
const props = withDefaults(defineProps<{
  bgColor: string,
  textColor: string,
  text: string
}>(), {
  bg: '#ffffff',
  textColor: '#000000',
  text: 'TEST'
})

const style = computed(() => {
  return {
    'background': props.bgColor,
    'color': props.textColor
  }
})

</script>
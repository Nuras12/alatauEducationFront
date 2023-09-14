import {defineStore} from "pinia";
import {ref} from "vue";


export const useFormModal = defineStore('formModal', () => {
    const modal = ref(false)
    const showModal = () => modal.value = true
    const hideModal = () => modal.value = false

    return {
        modal,
        showModal,
        hideModal
    }
})
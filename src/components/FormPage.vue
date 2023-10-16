<template>
  <section class="form-section">
    <div class="form-section__content">
      <form class="form" @submit.prevent="submit">
        <a @click="formModal.hideModal()" class="formBack univer__link"
          ><img
            style="transform: rotate(180deg)"
            src="@assets/sectionArrow.svg"
            alt="arrow"
          />Назад</a
        >
        <div class="form__logo"></div>
        <h3 class="form__title">Оставить заявку</h3>

        <input
          :class="{ 'error-border': error && model.name === '' }"
          type="text"
          class="form__input"
          placeholder="Имя*"
          v-model="model.name"
        />
        <label class="input-tel__label">
          <div class="input-tel__prefix">+7</div>
          <input
            :class="{ 'error-border': error && model.phone.length < 10 }"
            class="form__input input-tel"
            style="margin: 0"
            type="tel"
            v-mask="'(000) 000-00-00'"
            @accept="onAccept"
            :value="model.phone"
          />
        </label>
        <p class="input-error" v-if="error">Заполните поля</p>
        <p class="input-success" v-if="success">Успешно отправлено</p>

        <button class="form__button">Отправить</button>
      </form>

      <h2 class="form-section__title">Консультации по обучению в Китае</h2>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useFormModal } from "@store/formModal";
import { IMaskDirective as vMask } from "vue-imask";
import { computed, reactive, ref, watch } from "vue";
import { sendForm } from "@utils/form";
const formModal = useFormModal();
const error = ref(false);
const success = ref(false);
const model = reactive({
  name: "",
  phone: "",
});
const onAccept = (e: CustomEvent) => {
  const { unmaskedValue } = e.detail;
  model.phone = unmaskedValue;
};
watch(model, (value) => {
  error.value = false;
  success.value = false;
});
const validate = () => {
  if (model.name === "") throw "places";
  if (model.phone.length !== 10) throw "places";
};
const submit = async () => {
  try {
    validate();
    const res = await sendForm(model);
    if (res.status === 201) {
      success.value = true;
    }
  } catch (e) {
    if (e === "places") error.value = true;
  }
};
</script>
<style>
.input-tel__label {
  position: relative;
  width: 100%;
  margin-bottom: 16px;
}
.input-tel__prefix {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: rgba(19, 19, 26, 0.7);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
}
.input-tel {
  padding-left: 2.5rem;
}
.input-tel::placeholder {
  margin: 0;
}
.input-error {
  margin-bottom: 16px;
  color: #d41111;
}
.input-success {
  margin-bottom: 16px;
}
.error-border {
  border: 1px #d41111 solid;
}
@media screen and (max-width: 700px) {
  .input-tel__prefix {
    font-size: 16px;
    left: 0.5rem;
  }
  .input-tel {
    padding-left: 2rem;
  }
}
</style>

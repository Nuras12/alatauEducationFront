<template>
  <section class="univer-info">

    <a class="history__nav" @click="goBack"><img src="../assets/backArrow.png" alt="back" class="history__arrow">Блоги</a>

    <div class="univer-info__content">
      <div class="univer-info__main">
        <img :src="`${baseUrl}${blog.pic.path}`" alt="ava" class="univer-info__img">
        <div class="univer-info__main-text">
          <p class="univer-info__date">{{ createdDate }}</p>
          <h3 class="univer-info__name">{{ blog.title }}</h3>
          <p class="univer-info__teacher"><img src="../assets/color.png" alt="color" class="univer-info__color"> Габит
            Батырханов</p>
        </div>
      </div>
      <div class="univer-info__text">

        <div v-html="blog.htmlBody" class="univer-info__describe">

        </div>

      </div>

      <div class="univer-info__footer">




        <div class="footer__social">
          <p class="footer__social-text">Следите за нами</p>
          <a href="" class="footer__social-link">
            <img src="../assets/instagramLogo.png" alt="instagram" class="footer__social-img footer__social-img_insta">
          </a>
          <a href="" class="footer__social-link">
            <img src="../assets/whatsappLogo.png" alt="whatsapp" class="footer__social-img">
          </a>
          <a href="" class="footer__social-link">
            <img src="../assets/youtubeLogo.png" alt="youtube" class="footer__social-img">
          </a>
        </div>


        <div class="footer__data">
          <p class="footer__contact">
            <img src="../assets/footerMail.png" alt="mail" class="footer__contact-img footer__mail">
            Alatau.edu@gmail.com
          </p>
          <p class="footer__contact">
            <img src="../assets/footerPhone.png" alt="mail" class="footer__contact-img footer__phone"> + 7 (707) 926 25
            69
          </p>
        </div>

      </div>
    </div>

  </section>
</template>
<script setup lang="ts">
import {IOneBlog} from "../plugins/blogs.ts";
import {computed} from "vue";
import parseDate from "../helpers/parseDate.ts";
import {baseUrl} from "../plugins/http.ts";
import router from "../router/router.ts";
const props = defineProps<{
  blog: IOneBlog
}>()
const blog = computed(() => props.blog)
const createdDate = computed(() => parseDate(props.blog.created_at))
const goBack = () => {
  router.go(-1)
}
</script>
<template>
  <footer class="footer">
    <div class="footer__china">
      <div class="w-full overflow-hidden absolute left-0 bg-alBlue py-[20px]">
        <marquee loop="-1" behavior="smooth" scrollamount="10px" direction="left"
                 class="text-white font-bold flex items-center text-[40px]">
          外国人来华留学·中国留学·本科·研究生·预科班·外国人来华留学·中国留学·本科·研究生·预科班·外国人来华留学·中国留学·本科·研究生·预科班·外国人来华留学·中国留学·本科·研究生·预科班·外国人来华留学·中国留学·本科·研究生·预科班·外国人来华留学·中国留学·本科·研究生·预科班·外国人来华留学·中国留学·本科·研究生·预科班·外国人来华留学·中国留学·本科·研究生·预科班·外国人来华留学·中国留学·本科·研究生·预科班·外国人来华留学·中国留学·本科·研究生·预科班·外国人来华留学·中国留学·本科·研究生·预科班·外国人来华留学·中国留学·本科·研究生·预科班·
        </marquee>
      </div>
    </div>
    <div class="footer__head">
      <div class="footer__title">Консультация по обучению в Китае</div>
      <button class="footer__button" @click="formModal.showModal()">Оставить заявку</button>
      <div class="footer__mountains"></div>
    </div>
    <div class="footer__main">
      <div class="footer__content">
        <div class="footer__logo"></div>
        <div class="footer__nav nav">
          <div class="nav__column">
            <a href="" class="nav__title">Гранты в Китай</a>
            <a href="" class="nav__link">Городской</a>
            <a href="" class="nav__link">Университетский</a>
            <a href="" class="nav__link">Консульский</a>
          </div>

          <div class="nav__column">
            <a href="" class="nav__title">Университеты</a>
            <a href="" class="nav__link">Шаньханский</a>
            <a href="" class="nav__link">Пекинский</a>
            <a href="" class="nav__link">Алмазский</a>
          </div>

          <div class="nav__column">
            <a href="" class="nav__title">Наши услуги</a>
            <a href="" class="nav__link">Программа 1+4</a>
            <a href="" class="nav__link">Языковой год</a>
            <a href="" class="nav__link">Бакалавриат</a>
          </div>

          <div class="nav__column">
            <a href="" class="nav__title">Блог</a>
            <a href="" class="nav__link">Что-то там</a>
          </div>
        </div>
        <div class="footer__line"></div>
        <div class="footer__contacts">
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
              <img src="../assets/footerMail.png" alt="mail" class="footer__contact-img footer__mail"> Alatau.edu@gmail.com
            </p>
            <p class="footer__contact">
              <img src="../assets/footerPhone.png" alt="mail" class="footer__contact-img footer__phone"> + 7 (707) 926 25 69
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {useFormModal} from "../store/formModal";

const formModal = useFormModal()
</script>
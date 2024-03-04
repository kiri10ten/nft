<template>
    <swiper
      :slidesPerView="2"
      :spaceBetween="30"
      :centeredSlides="true"
      :modules="modules"
      class="mySwiper"
      @swiper="slider"
      @slideChange="slider"
      :class="{ animate__animated:pop  , animate__lightSpeedInLeft:pop }"
          >
      <swiper-slide><img src="../assets/images/gameimage/gallery02.jpg" alt="">
      <p>PUBG TOURNAMENT</p></swiper-slide>
      <swiper-slide><img src="../assets/images/gameimage/gallery03.jpg">
      <P> ASSASIANS CREED</P></swiper-slide>
      <swiper-slide><img src="../assets/images/gameimage/gallery04.jpg">
      <P>WORLD OF WARCRAFT</P></swiper-slide>
      <swiper-slide><img src="../assets/images/gameimage/gallery05.jpg">
      <P> THE CHANT S.2</P></swiper-slide>

    </swiper>
  </template>
  
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';
  import {ref} from 'vue'

  const pop=ref(true)
  const modules = [Pagination];
  const paginationOptions = {
    clickable: true
  };

  const slider =()=>{
    console.log("new one")
    pop.value =!pop.value

  }

  
  </script>
  <style scoped>

*{background-color: black;}
img{
  width: 100%;
  height: 100%;
}

</style>
  
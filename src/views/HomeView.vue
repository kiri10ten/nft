<template>
  <div class="banner-background">
    <navigation class="animate__animated animate__lightSpeedInLeft nav" />
    <home-banner />

   
    <div :class="{ animate__animated:pop  , animate__lightSpeedInLeft:pop }" class="card-upper-wrapper">
      <cards :class="{animate__lightSpeedInLeft:pop }" 
        v-for="(card, index) in carddata"
        :key="index"
        :gamename="card.name"
        :imagelink="card.imagesrc" 
        :creatorname="card.creator_name"
        :price="card.nft_price"
      />
    </div>
<about-us/>

    <character-detail  />

    <image-slider />
  


<active/>
<videobanner/>
<roadmap/>
<trending />
    

    <footer-alt />
  </div>
</template>

<script setup lang="ts">
import Navigation from '@/components/navigation.vue'
import HomeBanner from '@/components/homeBanner.vue'
import FooterAlt from '@/components/footeralt.vue'
import Cards from '@/components/cards.vue'
import AboutUs from '@/components/aboutus.vue'
import CharacterDetail from '@/components/characterdetail.vue'
import ImageSlider from '@/components/imageslider.vue'
import active from '@/components/active.vue'
import timelinedata from '@/components/timelinedata.vue'
import roadmap from '@/components/roadmap.vue'
import { ref } from 'vue'
import  trending from '@/components/trending.vue'
import videobanner from '@/components/videobanner.vue'

let pop = ref(true)

const popup = () => {
  console.log("event gets triggered")
  pop.value = !pop.value
}

const carddata = [
  {
    name: 'WOLF GAMING ART',
    creator_name: 'Alex max',
    tag: 'creator',
    nft_price: '1.002ETH',
    imagesrc: 'src/assets/images/gamelogo/forestgaming.jpg'
  },
  {
    name: 'Forest princess',
    creator_name: 'Alex max',
    tag: 'creator',
    nft_price: '1.002ETH',
    imagesrc: 'src/assets/images/gamelogo/girlfirefly.jpg'
  },
  {
    name: 'girl firefly art ',
    creator_name: 'Alex max',
    tag: 'creator',
    nft_price: '1.002ETH',
    imagesrc: 'src/assets/images/gamelogo/wolf_gaming.jpg'
  }
]



</script>

<style scoped>
.card-upper-wrapper {
  display: grid;
  gap: 2rem;
  grid-template-columns: auto auto;
  margin: 127px;
  inset: 80px; 
}

.banner-background {
  background-image: url("../assets/images/slider_bg.jpg");
}

.active-members-wrapper{

  display: flex;

}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
 .card-upper-wrapper{
  display: flex;
  flex-direction: column;
  width: 100%;
 }
}


</style>

<template>
    <h1> TOP TRENDING 🔥</h1>

<swiper-container
:slides-per-view="3"
:swiper-button-prev="true">

<swiper-slide v-for="trend in trendingcarddata">

    <div class="fulltrendingwrapper">
        <div class="full" >

            <div class="topleftwrapper">
                
                <img class="imagecard" :src="trend.imagelink">
                <div>
                    <p class="trendingname">{{ trend.trendingname }}</p>
                    <span class="twitterhandle">@jonmax</span>

                </div>
            </div>


            <div>
                <img  class="imagebig" :src="trend.monkeyimage">
            </div>
            <div class="bottomwrapper">
                <div>
                    <p>Last bid</p>
                    <span>{{ trend.price }}</span>
                </div>
                <div><button>Bid</button></div>
            </div>
        </div>
    </div>

</swiper-slide>
</swiper-container>

     
    
</template>


<script setup lang="ts">

import { trendingcarddata } from '@/contents';
import { SwiperSlide } from 'swiper/vue';


</script>


<style scoped>
.topleftwrapper {
    display: flex;
}

.bottomwrapper {
    display: flex;
    justify-content: space-between;
}

.fulltrendingwrapper {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    margin:2px;
  


}
.full{
    background-image: url('/images/background/trendnft_img.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 27px;
    overflow: hidden;
    padding: 21px;
}

.imagebig{

border-radius: 2%;
margin-top: 20px;


}

.twitterhandle{
font-size: 11px;
text-decoration: underline;
color:#adb0bc;

}


button{
   background-color: #ffbe18;
   color: black;
}


.imagecard{
    width: 35px;
    height: 35px;
}

.trendingname{
    margin: 0;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
 
  .fulltrendingwrapper {
   flex-direction: column;


}

  }
</style>

<template>
    <div class="complete-div-wrapper">

  
<div >
<h1>WE ARE DEVELOPER ERN NFT GAMING</h1>
<img class="rotation"   src="/images/socials/video-calling.png">
</div>
<div class="images">
<img src="/images/aboutimages/aboutimage.jpg" alt="">
<img src="/images/aboutimages/aboutimage2.jpg" alt="">





</div>
<div class="absoluteone">
    Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s when an unknown printer took a galley.
</div>
</div>
<services/>
</template>

<script setup lang="ts">

import services from '../services.vue';
</script>

<style scoped>
@keyframes rotation{
from {
    transform: rotate(360deg);
}

to{
    transform:rotate(0deg);
}

}

.rotation{
    width: 10%;
    height: 10%;
    animation: rotation 12s linear infinite;
}


.complete-div-wrapper{
    display: flex;
    background-color:#10181f ;
    position: relative;
   
}

.images{
    display: flex;
    gap: 2rem;
}

.test-svg{
    width: 100%;
    height: 100%;
    color: aliceblue;
}


.absoluteone{
    position: absolute;
    bottom: -2px;
    right: -2px;
    background-color: #10181f;
    max-width: 55%;
    padding: 2%;
    font-family: poppins;}
</style>
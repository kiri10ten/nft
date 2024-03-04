<template>
<div class="servicewholewrapper">
<span>POWERFUL SERVICES</span>
<h1>
    OUR POWERFUL SERVICES DONE ON TIME
</h1>
<div class="flexclass">
<div class="thewholewrappericon">
<div class="iconwrapper" v-for="service in services">
<img :src="service.icons">
<p>{{ service.title }}</p>
<p>{{ service.description }}</p>
</div>
</div>
<div>
</div>
<img src="/images/background/services_img02.jpg">
</div>
</div>
</template>
<script setup lang="ts">
import  {services} from '../contents'
</script>
<style scoped>
.iconwrapper{

    display: flex;
    flex-direction: column;
}
.iconwrapper img{
width: 7%;
height: 30%;
display: flex;
flex-direction: column;
}
.thewholewrappericon{

    display: grid;
 grid-template-columns: auto auto ;
}
.flexclass{
    display: flex;

}
.servicewholewrapper{
    background-color: black;

}

</style>
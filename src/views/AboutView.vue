<template>

<div class="bg" >
<navigation />
<div class="something">


 <div class="newsomethingwrapper">
    <div  >
<h1> About Us</h1>

<RouterLink to="/home" >Home</RouterLink>
<RouterLink to="/about">About Us </RouterLink>
</div>
<div>
<img src="/src/assets/images/breadcrumb_img01.png">
</div>
</div>   
<developer/>
<active/>
<footeralt/>

</div>



</div>
  
</template>
<style scoped>

*{
    color:rgb(255, 255, 255);
}

.newsomethingwrapper{
    display: flex;
    justify-content: space-between;
    align-items:center;
}


.bg{


background-image:url("../assets/images/breadcrumb_bg01.jpg")
}
</style>
<script setup lang="ts">

import navigation from '@/components/navigation.vue';

import developer from '@/components/about/developer.vue';

import active from '@/components/active.vue';
import footeralt from '@/components/footeralt.vue';


</script>
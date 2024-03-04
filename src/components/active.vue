<template>
<div>
    <span> Our Team Member</span>
    <p>ACTIVE TEAM MEMBERS</p>
    <div class="active-content-wrapper">
    <team v-for="(data,index) in teamdata"
:imagesrc="data.imagesource"
:name="data.name"
:designation="data.designation"/>
</div>
</div>

</template>

<script setup lang="ts">
import {teamdata} from '@/contents'
import team from './team.vue';
</script>


<style scoped>


.active-content-wrapper{
    display: flex;
    justify-content: space-between;
}

*{
    align-items: center;
    text-align: center;
    text-transform: uppercase;
}



@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .active-content-wrapper{
    display: flex;
    flex-direction: column;
}



  }





</style>
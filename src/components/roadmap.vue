
<template>
  <div class="roadmapwrapper">
<div >
<h3>A LOOK INTO ROADMAPS SEASONS</h3>

<p>With Season 1 Ending with our play and Duis elementum sollicitudin is yaugue euismods Nulla ulla Player-focused updates games from Mobile App and Enjoy.</p>
</div>
<div class="line">
<timelinedata/>
</div>
</div>  
</template>


<script setup lang="ts">

import timelinedata from './timelinedata.vue';

</script>
<style scoped>

.roadmapwrapper{
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 10%;
    
}

.line{
    position: relative;
}

.line::before{
    background: -webkit-linear-gradient(90deg,#10161c 0,#45f882 100%);
    border-radius: 5px;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 6px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .roadmapwrapper{

display: flex;
flex-direction: column;
}
  }


</style>
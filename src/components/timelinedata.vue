<template>

<div class="timelinewrapper">
<div class="timecard" v-once v-for="data in timelinedata">
 <p>{{ data.season}}</p>
  <div v-for="dat in data.seasoncontents">
  {{ 
    dat }}
    </div>
</div>
</div>    
</template>

<script setup lang="ts">
import {timelinedata} from '../contents'

</script>
<style scoped>

.timelinewrapper{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
}

.timecard{

    background-color: #1b242e;
    border-radius: 8px;
    box-shadow: 0 3px 7px 0 rgba(0,0,0,.21);
    margin: 0 0 20px 45px;
    padding: 45px;
    position: relative;
    width: fit-content;
}

</style>
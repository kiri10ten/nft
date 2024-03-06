<template>
<div class="circle"  :style="{  left: x+'px',top:y+'px',position:'absolute' }" > </div>
<RouterView/>


</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'
import {computed, reactive, ref} from  'vue'
const { x, y } = useMouse()
x.value=x.value+2
y.value =y.value+2
</script>
<style scoped>


.circle{
    width: 8px;
    height: 8px;
    background-color: aquamarine;
    border-radius: 100%;
    translate: -100% -100%;
    transition: all 25ms ease-in-out;
    background-image: url("/images/ic--sharp-play-arrow.svg");
}



</style>
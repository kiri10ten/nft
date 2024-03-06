<template>
    <div class="bannercontent">
        <div class="gaming-banner-left">
            <h6 class="subtitle game-subtitle">Live Gaming</h6>
            <h2 class="heading-subtitle">Steaming</h2>
            <p class="banner-subtitle"> Video Games Online</p>
            <RouterLink to="/contact" class="sign-button"> Contact Us</RouterLink>
            {{ x }}
            {{ y }}
        </div>
        <div>
            <img  class="fight-logo" src="/images/defeat.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.bannercontent {

    display: flex;
    gap: 10rem;
}


.gaming-banner-left{
    margin-top: 146px;
    margin-left: 20px;
   
}
.heading-subtitle {

    font-size: 118px;
    text-transform: uppercase;
}

.game-subtitle h6{

    font-size: 20px;
    position: absolute;
}

.fight-logo{
    width: 100%;
}

.fight-logo:hover{
    animation: float 2s ease-in-out infinite;
}

.banner-subtitle{
    font-weight: 700;
    letter-spacing: 5px;
    line-height: 1.4;
    margin:0;
    font-size: 26px;
    text-transform: uppercase;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */

.heading-subtitle{
    font-size: 80px;
}
}

@keyframes float{
    from { transform: translateY(0); }
  to { transform: translateY(-10px); }
}

   


</style>
<script  setup lang="ts">
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'
import {computed, reactive, ref} from  'vue'
const { x, y } = useMouse()

const styleProps = computed(()=>`top: 4px; left: 4px; `)


console.log(x)
console.log(y)
</script>
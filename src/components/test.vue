<template> 
    <div class="bannercontent">
    <div class="gaming-banner-left">
    <h6 class="subtitle game-subtitle">Live Gaming</h6>
    <h2 class="heading-subtitle">Steaming</h3> 
    <p class="banner-subtitle">Video Games Online</p>
    <RouterLink to="/contact" class="sign-button">Contact Us</RouterLink>
    <span v-text="x"></span> <span v-text="y"></span> 
    </div> <div> <img class="fight-logo" src="/images/defeat.png" alt="" /> </div> 
    <div class="dynamic-style" :style="{ top: `${y}px`, left: `${x}px` }"> </div> </div> 
    </template> 
    <style scoped> 

    {  position: absolute; color: yellow; font-size: 13px; 
    transition: top 0.2s ease-in-out, left 0.2s ease-in-out; 
    } </style>
    <script setup lang="ts"> 
    import { useMouse, usePreferredDark } from '@vueuse/core';
    import { ref } from 'vue'; const { x, y } = useMouse(); 
    const styleObject = ref({  }); 
    const dynamicStyle = ref({ top: 0, left: 0, });
    computed({ get() { return { top: `${y}px`, left: `${x}px`, }; }, 
    set(newValue) { Object.assign(dynamicStyle.value, newValue);  }, });  </script>
    
    
    
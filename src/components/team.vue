<template>
    <div>
   
        <img :src="imagesrc" alt="">
        <h4>{{ name }}</h4>
        <p>{{designation}}</p>
    
    </div>
    
    </template>
    
    <script setup lang="ts">
    
    const props= defineProps({
        imagesrc:String,
        name:String,
        designation:String
    
    })
    </script>
    
    
    <style scoped>
    
    
    
    
    </style>
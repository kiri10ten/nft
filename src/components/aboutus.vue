<template>

<div class="aboutusdiv">
<p class="aboutustitle">Know About Us</p>
<h1>TOP RATED STREAMERS</h1>
      
<img class="imageaboutus" src="@/assets/images/aboutus/title_shape.svg">
<div>
<RouterLink class="routercontent" to="/"> <button class="button-again">BUY HERO</button></RouterLink>
<RouterLink class="routercontent" to="/"> <button class="button-again">BUY NFTS</button></RouterLink>
</div>

<div class="immages">
<img src="../assets/images/userprofile/about_tab01.png">
<img src="../assets/images/userprofile/about_tab02.png">
<img src="../assets/images/userprofile/about_tab03.png">
<img src="../assets/images/userprofile/about_tab04.png">
<img src="../assets/images/userprofile/about_tab05.png">
<img src="../assets/images/userprofile/about_tab06.png">





</div>

</div>
</template>



<style scoped>

*{

    background-color: black;
    margin-bottom: 0;
    text-align: center;
    align-items: center;
}

.aboutustitle{
color:#45f882; 
font-size: 14px;
letter-spacing: 2px;
line-height: 1px;
text-transform: uppercase;
font-weight: 500;


}

.immages{
    display: block;
    gap: 0.5rem;
}

.aboutusdiv{
    padding: 10px;
    display: block;
    text-align: center;

    
}


.routercontent{

    text-decoration: none;
    color: white;
    border:rgb(180, 252, 178);
    border-style:border;
}

.routercontent::after{
    content: "";
    background-image:url("../assets/images/aboutus/btn_shape01.png") ;
    height: 51px;
    width: 15px;
    transform: translateY();


}

.button-again{
    border: solid;
    border-color: #45f882;
}

.button-again::after{
    /* content: " "; */
    background-image:url("../assets/images/aboutus/btn_shape01.png") ;
    height: 51px;
    width: 15px;
    left:-2px;
display: block;

    
}
</style>
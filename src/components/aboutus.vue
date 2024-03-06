<template>

<div class="aboutusdiv">
<p class="aboutustitle">Know About Us</p>
<h1>TOP RATED STREAMERS</h1>
      
<img class="imageaboutus" src="/images/aboutus/title_shape.svg">
<div class="decoratedbutton">
<RouterLink class="routercontent" to="/"> <button class="button-again">BUY HERO</button></RouterLink>
<RouterLink class="routercontent" to="/"> <button class="button-again">BUY NFTS</button></RouterLink>
</div>

<div class="immages">
<img src="/images/userprofile/about_tab01.png">
<img src="/images/userprofile/about_tab02.png">
<img src="/images/userprofile/about_tab03.png">
<img src="/images/userprofile/about_tab04.png">
<img src="/images/userprofile/about_tab05.png">
<img src="/images/userprofile/about_tab06.png">
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
.aboutustitl
e{
color:#45f882; 
font-size: 14px;
letter-spacing: 2px;
line-height: 1px;
text-transform: uppercase;
font-weight: 500;


}

.immages{
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.aboutusdiv{
    padding: 92px;
    display: block;
    text-align: center;

    
}

.aboutusdiv>:nth-child(1){
    padding-bottom: 2px;
}
.aboutusdiv>:nth-child(4){
    padding-bottom: 46px;
    padding-top:23px;
}


/* .aboutusdiv > *{
    padding: 5px;
} */

.routercontent{

    text-decoration: none;
    color: white;
    border:rgb(180, 252, 178);
    border-style:border;
    display: contents;
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

.decoratedbutton{
    display: flex;
   justify-content: center;
}



</style>
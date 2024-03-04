<template>
<div  class="footerwrapper">

<div class="footerdivision1">
<img   src="../assets/images/logo.png" class="logo">
<p>Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod. Nulla ullam dolor sitamet consectetur</p>

<p class="">Active <span>with us</span></p>
<div class="socials">
<img src="../assets/images/socials/discord.png">
<img src="../assets/images/socials/instagram.png">
<img src="../assets/images/socials/telegram.png" alt="">
<img src="../assets/images/socials/twitter.png" alt="">
    
</div>



</div>
<div class="footerdivision2"><h4>Quick Link</h4>

<RouterLink class="routerlinkstyle" to="gaming">Gaming</RouterLink>
<RouterLink  class="routerlinkstyle" to="product">Product</RouterLink>
<RouterLink  class="routerlinkstyle" to="allnft"> All NFTs</RouterLink>
<RouterLink class="routerlinkstyle" to="socialwork"> Social Network</RouterLink>
<RouterLink class="routerlinkstyle" to="domainname"> Domanin Name</RouterLink>
<RouterLink class="routerlinkstyle" to="collectibles"> Collectibles</RouterLink></div>


<div class="footerdivision3">
    <h4>Supports</h4>

    <RouterLink  class="routerlinkstyle"    to="/setting">setting & Privacy</RouterLink>
    <RouterLink  class="routerlinkstyle"  to="/helpandsupport"> Help & support</RouterLink>
    <RouterLink  class="routerlinkstyle" to="/liveaction"> Live Actions</RouterLink>
    <RouterLink  class="routerlinkstyle"  to="/itemdetails">Item Details</RouterLink>
    <RouterLink  class="routerlinkstyle" to="/support">24/7 support</RouterLink>
    <RouterLink  class="routerlinkstyle" to="/news">Our News</RouterLink>
</div>
<div class="footerdivision4">

    <h4>Newsletter</h4>
    <p>Subscribe our newsletter to get our latest update & newsconsectetur</p>

    <div class="maildiv">
    <input  class="text-input" type="text" placeholder="Your email address">

    <button class="button-background"> <svg  class="svg-background" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887z"/></svg></button>

</div>

</div>



</div>


</template>


<style scoped>


.footerwrapper{
display: grid;
grid-template-columns: repeat(auto-fit,minmax(200px,auto));
gap: 3.5rem;

padding: 80px 10px 30px
}

img{
    max-width: 30px;

}


.footerdivision1,.footerdivision2,.footerdivision3,.footerdivision4
{
display: flex;
flex-direction: column;
}

*{
    background-color: #0f161b;
    font-family: poppins;
    inset: 20px;
}

.routerlinkstyle{

    text-decoration: none;
    color: #adb0bc;


}

.routerlinkstyle:hover{

color: #45f882;


}

.maildiv{
    display: flex;
}


.logo{
    max-width: 177px;

}


.text-input{

background-color: #1f2935;
border: none;
border-radius: 6px;
display: block;


font-size: 14px;
height: 60px;
padding: 17px 100px 17px 25px;
width: 100%;
color: #adb0bc;


}

.socials{
    display: flex;
    gap: 1rem;
}

.button-background{
    background-color: #45f882;
    color: aliceblue;
    border: none;
}


.svg-button{
    background-color: #45f882;
}

</style>


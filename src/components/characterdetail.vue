<template>
    <div class="characterdetailwrapper">
        <div>
            <img src="/images/about_img01 (1).jpg" />
        </div>
        <div class="rightcontent">
        <div class="sidewrapper">
            <div class="leftupcontentwrapper">
                <h1>Human Game</h1>
                <p class="subspan">RATE 50 %</p>
                <p>
                    Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue
                    euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.
                </p>
            </div>
            <div class="sidepanelbutton">
                <button>chichi dragon balls</button>
                <button>space Babe Night</button>
                <button>Dragon Ball</button>
            </div>
        </div>
        <div class="belowpannel">
            <button class="smallbutton">Dragon Ball</button>
            <button class="smallbutton">NFT Market</button>
            <button class="smallbutton">Support</button>
        </div>
    </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
* {
    color: white;
    background-color: black;
}

.characterdetailwrapper {
    display: flex;
    gap: 2rem;
}

.upperdetailwrapper {
    display: flex;
}

.subspan {
    color: #ffbe18;
    text-transform: uppercase;
}

.smallbutton {
    background-color: #1f2935;
    border: none;
    padding: 25px 83px;
    margin: 2px;
}

.sidewrapper {
    display: flex;
}

.rightcontent{
    display: flex;
    flex-direction: column;
}


.sidepanelbutton button{
   padding: 2px;
   border: rgb(67, 66, 66);
   box-shadow: 0 3px 7px 0 rgba(31, 228, 5, 0.21);
   padding: 10px;
   margin: 2px;
    
}

.belowpannel{
    width: 100%;
}






@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .characterdetailwrapper{
    width: 100%;
    flex-direction: column;


  }


  .sidewrapper{
    display: flex;
    flex-direction: column;
}

.belowpannel{
    width: 100%;
    display: flex;
    flex-direction: column;
}



  
}
</style>

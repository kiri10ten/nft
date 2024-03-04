<template>
  <div class="card-wrapper">
    <div class="card-wrapper-item">
      <div class="card-wrapper-outer">
        <div class="image">
          <img :src="imagelink" alt="" />
        </div>
        <div>
          <h4>{{ gamename }}</h4>
          <div class="creator-badge">
            <img class="avatar" src="/images/gamelogo/nft_avatar.png" alt="" />
            <h5 class="creatorname">{{ creatorname }}</h5>
            <!-- <span> |</span> -->

            <span class="creator"> creator</span>
          </div>
          <div class="pricecard-wrapper">
            <p>{{ price }}</p>
            <button class="yellow-button">
              Bid
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="#201f2a"
                  d="M16.15 13H5q-.425 0-.712-.288T4 12q0-.425.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  gamename: String,
  creatorname: String,
  tag: String,
  imagelink: String,
  price: String
})
</script>
<style scoped>
.card-wrapper {
  display: flex;
  background-color: #121a23;
  border: 1px solid rgba(76, 76, 76, 0.2);
  border-radius: 8px;
  margin: 0 0 30px;
  padding: 25px;
  transition: all 0.3s ease-out 0s;
}

.card-wrapper-item {
  align-items: flex-end;
  width: 100%;
  border-radius: 5px;
  background-color: #121a23;
}

.card-wrapper-outer {
  display: flex;
  gap: 2rem;
  border-radius: 5px;
  background-color: #121a23;
}

.creator-badge {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #121a23;
}

.pricecard-wrapper {
  display: flex;
  gap: 2rem;
  margin-top: 30px;
  border: solid;
  border-radius: 8px;
  border-color: #4c4c4c80;
  padding:14px 15px 14px 20px;
}

.card-wrapper-outer img {
  border-radius: 5px;
  width: 11%;
  height: 100%;
  background-color: #121a23;
}
.image img {
  width: 100%;
  background-color: #121a23;
}



.creator::before{
  content: "|";
}


</style>

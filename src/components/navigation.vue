<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand" href="#">
        <img class="logo" src="../assets/images/logo.png" alt="" />
      </RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About Us</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Tournament
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="#">Tournament </a></li>
              <li><a class="dropdown-item" href="#">Tournament single</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              pages
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="#">Gaming shop </a></li>
              <li><a class="dropdown-item" href="#">Shopping Details</a></li>
              <li><a class="dropdown-item" href="#">Our services</a></li>
              <li><a class="dropdown-item" href="#">Services Details</a></li>
              <li><a class="dropdown-item" href="#">Player Details</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              News
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="#">Our Blog </a></li>
              <li><a class="dropdown-item" href="#">Blog Details</a></li>
            </ul>
          </li>
          <li>
            <RouterLink to="/" class="nav-link">Contact </RouterLink>
          </li>

          <li class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
              <g fill="none" stroke="#888888" stroke-width="1.5">
                <circle cx="11.5" cy="11.5" r="9.5" />
                <path stroke-linecap="round" d="m20 20l2 2" />
              </g>
            </svg>
          </li>
          <li class="nav-item signin-button">
            <RouterLink to="/contact" class="sign-button">~ Sign in</RouterLink>
          </li>

          <li class="nav-item nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 14 14">
              <path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 2H6m5 5H3.5m5 5h-8" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar-brand,
.nav-item,
.nav-link {
  color: white;
}

.bg-dark {
  --bs-bg-opacity: 0;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.try {
  background-color: transparent;
}

.dropdown-menu {
  background-color: #182029;
  border-radius: 0;
}


.logo img{
  max-width: 177px;

  
}
.dropdown-item {
  color: white;
}

.dropdown-item:hover {
  background-color: #182029;
  color: #45f882;
}

.nav-item button {
  border: none;
}

navbar-nav {
  --bs-nav-link-padding-x: 0;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: white;
  --bs-nav-link-hover-color: black;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}



.nav-link {
  font-size: 15px;
  text-decoration: none;
  line-height: 1;
  position: relative;
  text-transform: uppercase;
  z-index: 1;
  letter-spacing: 0.8px;
  padding: 42px 23px;
  color: #fff;
  font-weight: 800;
}

.nav-link:hover {
  color: #45f882;
}

.nav-link::after,.dropdown-toggle::after{
  content: "";
    
    background-color: black;
   

   height: 1px;
   left: 0;
   margin: 0 auto;
   opacity: 0;
   position: absolute;
   right: 0;
   top: 50%;
   transform: translateY(-50%) rotate(0deg);
   transition: all .3s ease-out 0s;
   width: 42px;
   box-sizing:border-box;
   background-color:#45f882;
}

.nav-link:hover::after,.dropdown-toggle:hover::after{
  opacity: 1;
  transform: translateX(-20%) rotate(-40deg);
    transition: all .3s ease-out 0s;
}

.navbar-expand-lg .navbar-nav {
  justify-content: space-between;
  gap: 1.5rem;
}

.side-nav {
  display: flex;
}

.signin-button {
  padding-top: 30px;
}

.container-fluid {
  gap: 5rem;
}
</style>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

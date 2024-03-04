import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import 'bootstrap';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:3000/'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

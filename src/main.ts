import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'

Vue.use(Vuetify, {
  iconfont: 'md'
})

export const http = axios.create({
  baseURL: 'http://localhost:3000/'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

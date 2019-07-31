import Vue from 'vue'
import Router from 'vue-router'
import Visits from '@/views/visits/Visits.view.vue'
import NewVisit from '@/views/newVisit/NewVisit.view.vue'
import NewGuest from '@/views/newGuest/NewGuest.view.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'visits',
      component: Visits
    },
    {
      path: '/newVisit',
      name: 'newVisit',
      component: NewVisit
    },
    {
      path: '/newVisit/:id',
      name: 'update',
      component: NewVisit
    },
    {
      path: '/newGuest',
      name: 'newGuest',
      component: NewGuest
    }
  ]
})

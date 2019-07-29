import Vue from 'vue';
import Router from 'vue-router';
import Visits from './views/Visits.vue';
import NewVisit from './views/NewVisit.vue';

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
    }
  ]
})

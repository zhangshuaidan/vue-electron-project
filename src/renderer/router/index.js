import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '/report',
      name: 'report',
      component: require('@/components/Report').default
    },
    {
      path: '/alarm',
      name: 'alarm',
      component: require('@/components/Alarm.vue').default
    },
    {
      path: '/negativereport',
      name: 'negativereport',
      component: require('@/components/NegativeReport').default
    },
    {
      path: '/positivereport',
      name: 'positivereport',
      component: require('@/components/PositiveReport').default
    },
    {
      path: '/keywords',
      name: 'home',
      component: require('@/components/Keywords').default
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

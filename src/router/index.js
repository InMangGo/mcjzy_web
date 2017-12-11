import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import(/* webpackChunkName: "home" */ '@/views/home/index')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home_path',
      component: home
    }
  ]
})

export default router

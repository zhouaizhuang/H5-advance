import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: () => import(/* webpackChunkName: "keyFrame" */ '../views/carousel/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

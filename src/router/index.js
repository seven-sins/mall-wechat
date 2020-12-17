import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/detail',
    component: resove => require(["@/views/goods/GoodsDetail.vue"], resove)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "/",
  routes
})

export default router

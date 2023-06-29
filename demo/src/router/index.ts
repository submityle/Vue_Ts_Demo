import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { homeRouter } from './modules/homeRouter'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/index'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue'),
    children: homeRouter
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/index.vue')
  },
  {
    path: '/enroll',
    name: 'enroll',
    component: () => import(/* webpackChunkName: "enroll" */ '../views/enroll/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

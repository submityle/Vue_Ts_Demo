import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
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
    component: () => import(/* webpackChunkName: "enroll" */ '../views/Error/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
// 路由前置登录守卫
router.beforeEach((to, from, next) => {
  if (to.path != '/login' && to.path != '/enroll') {
    let token = window.localStorage.getItem('token')
    if (!token) {
      window.location.href = '/login'
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router

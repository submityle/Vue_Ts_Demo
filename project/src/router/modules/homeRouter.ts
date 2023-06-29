import { type RouteRecordRaw } from 'vue-router'

export const homeRouter: Array<RouteRecordRaw> = [
  {
    path: '/home/index',
    name: '首页',
    component: () =>
      import(/* webpackChunkName: "home" */ '../../views/Home/modules/Home/index.vue')
  },
  {
    path: '/home/classify',
    name: '分类',
    component: () =>
      import(/* webpackChunkName: "classify" */ '../../views/Home/modules/Classify/index.vue')
  },
  {
    path: '/home/cart',
    name: '购物车',
    component: () =>
      import(/* webpackChunkName: "cart" */ '../../views/Home/modules/Cart/index.vue')
  },
  {
    path: '/home/address',
    name: '地址',
    component: () =>
      import(/* webpackChunkName: "my" */ '../../views/Home/modules/Address/index.vue')
  },
  {
    path: '/home/my',
    name: '我的',
    component: () => import(/* webpackChunkName: "my" */ '../../views/Home/modules/My/index.vue')
  }
]

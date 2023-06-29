import { createStore } from 'vuex'
import login from './modules/login'
import goods from './modules/goods'
import carts from './modules/carts'
import address from './modules/address'
export default createStore({
  modules: {
    login,
    goods,
    carts,
    address
  }
})

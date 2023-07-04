import { _getCartData, _addCartData, _editCartNum, _deleteCartData } from '../../api/index'
const carts = {
  namespaced: true,
  state: {
    data: localStorage.getItem('carts') || [],
    checkAll: true
  },
  getters: {
    // ALL_PRICE() {},
    // ALL_NUM() {}
  },
  mutations: {
    SET_STATE(state: any, payload: any) {
      state[payload.key] = payload.valueas
    },
    CHECKALL(state: any) {
      state.checkAll = !state.checkAll
    }
  },
  actions: {
    async GET_CART_DATA(context: any, payload: any) {
      const data = await _getCartData()
      if (data.data.code === 200) {
        context.commit('SET_STATE', {
          key: 'data',
          value: data.data.data
        })
      }
    },
    async ADD_CART_DATA(context: any, payload: any) {
      const data = await _addCartData(payload)
      if (data.data.code === 200) {
        context.commit('SET_STATE', {
          key: 'data',
          value: data.data.data
        })
      }
    },
    async EDIT_CART_NUM(context: any, payload: any) {
      const data = await _editCartNum(payload)
      if (data.data.code === 200) {
        context.commit('SET_STATE', {
          key: 'data',
          value: data.data.data
        })
      }
    },

    async DEL_CART_DATA(context: any, payload: any) {
      const data = await _deleteCartData(payload)
      if (data.data.code === 200) {
        context.commit('SET_STATE', {
          key: 'data',
          value: data.data.data
        })
      }
    }
  }
}
export default carts

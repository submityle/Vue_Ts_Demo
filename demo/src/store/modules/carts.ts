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
    // async ADD_NUM(state: any, payload: any) {},
    // async SUN_NUM(state: any, payload: any) {},
    // async DEL_CART(state: any, payload: any) {}
  }
}
export default carts

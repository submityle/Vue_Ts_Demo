const carts = {
  namespace: true,
  state: {
    data: localStorage.getItem('carts') || []
  },
  getters: {
    // ALL_PRICE() {},
    // ALL_NUM() {}
  },
  mutations: {
    SET_STATE(state: any, payload: any) {
      state[payload.key] = payload.valueas
    }
  },
  actions: {
    // async ADD_NUM(state: any, payload: any) {},
    // async SUN_NUM(state: any, payload: any) {},
    // async DEL_CART(state: any, payload: any) {}
  }
}
export default carts

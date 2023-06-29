const address = {
  namespace: true,
  state: {
    data: localStorage.getItem('address') || []
  },
  getters: {},
  mutations: {
    SET_STATE(state: any, payload: any) {
      state[payload.key] = payload.valueas
    }
  },
  actions: {}
}
export default address

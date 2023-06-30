import { _goodsAll, _goodsSearch } from '@/api'
const goods = {
  namespace: true,
  state: {
    data: []
  },
  mutations: {
    SET_STATE(state: any, payload: any) {
      state[payload.key] = payload.valueas
    }
  },
  actions: {
    async GET_GOODS_ALL(context: any, payload: any) {
      const goods = await _goodsAll()
      if (goods.data.code === 200) {
        context.commit('SET_STATE', {
          key: 'data',
          value: goods.data.data
        })
      }
    },
    async GET_GOODS_SEARCH(context: any, payload: string) {
      const goods = await _goodsSearch(payload)
      if (goods.data.code === 200) {
        context.commit('SET_STATE', {
          key: 'data',
          value: goods.data.data
        })
      }
    }
  }
}
export default goods

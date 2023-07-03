import { _getTabData, _goodsAll, _goodsSearch, _tabSorter } from '@/api'
const goods = {
  namespaced: true,
  state: {
    data: [],
    tabSort: [],
    tabData: []
  },
  mutations: {
    SET_STATE(state: any, payload: any) {
      // console.log(payload)
      state[payload.key] = payload.value
    }
  },
  actions: {
    async GET_GOODS_ALL(context: any, payload: any) {
      const data = await _goodsAll()
      if (data.data.code === 200) {
        context.commit('SET_STATE', {
          key: 'data',
          value: data.data.data
        })
      }
    },
    async GET_GOODS_SEARCH(context: any, payload: string) {
      const data = await _goodsSearch(payload)
      if (data.data.code === 200) {
        context.commit('SET_STATE', {
          key: 'data',
          value: data.data.data
        })
      }
    },
    async GET_TAB_SORT(context: any, payload: any) {
      const data = await _tabSorter()
      if (data.data.code === 200) {
        context.commit('SET_STATE', {
          key: 'tabSort',
          value: data.data.data
        })
      }
    },
    async GET_TAB_DATA(context: any, payload: any) {
      const data = await _getTabData()
      if (data.data.code === 200) {
        context.commit('SET_STATE', {
          key: 'tabData',
          value: data.data.data
        })
      }
    }
  }
}
export default goods

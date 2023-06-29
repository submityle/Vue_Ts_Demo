import { defineStore } from 'pinia'
import { GET_GOODS_ALL } from '@/api/user'
import type { dataType } from '../type/dataType'

interface goodsType {
  code: number
  data: dataType.goodData_Type
}
export const useGoodsStore = defineStore('goods', {
  state: () => {
    return {
      data: ['123', '456'] as any
    }
  },
  actions: {
    async getGoodsAllData() {
      const data = await GET_GOODS_ALL()
      if (data.data.code === 200) {
        this.data = data.data.data
        // console.log(this.data[0])
      }
    }
  }
})

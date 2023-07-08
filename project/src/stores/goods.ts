import { defineStore } from 'pinia'
import { GET_GOODS_ALL, EDIT_GOODS, ADD_GOODS } from '@/api/user'
import type { dataType } from '@/type/dataType'
export const useGoodsStore = defineStore('goods', {
  state: () => {
    return {
      data: [] as any
    }
  },
  actions: {
    async getGoodsAllData() {
      const data = await GET_GOODS_ALL()
      if (data.data.code === 200) {
        this.data = data.data.data
        // console.log(this.data[0])
      }
    },
    async editGood(value: dataType.goodData_Type) {
      const data = await EDIT_GOODS(value)
      if (data.data.code === 200) {
        await this.getGoodsAllData()
        alert('编辑成功')
        // console.log(this.data[0])
      }
    },
    async addGood(value: dataType.fromData_Type) {
      const data = await ADD_GOODS(value)
      // console.log(data)
      if (data.data.code === 200) {
        await this.getGoodsAllData()
        alert('添加成功')
        // console.log(this.data[0])
      }
    }
  }
})

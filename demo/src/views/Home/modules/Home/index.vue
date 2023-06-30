<template>
  <div>
    <Banner></Banner>
    <Tab :data="store.state.goods.tabSort"></Tab>
  </div>
</template>

<script lang="ts">
import Banner from '../../../../components/Banner.vue'
import Tab from '../../../../components/Tab.vue'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'

export default {
  components: { Banner, Tab },
  methods: {},
  setup() {
    const store = useStore()
    const data = {
      data: [],
      tabSort: []
    }
    const getGoods = () => {
      store.dispatch('goods/GET_GOODS_ALL')
      data.data = store.state.goods.data
    }
    const getTabSort = () => {
      store.dispatch('goods/GET_TAB_SORT')
    }
    onMounted(() => {
      setTimeout(() => {
        getGoods()
        getTabSort()
      }, 0.1)
    })
    return {
      ...data,
      store,
      getGoods,
      getTabSort
    }
  }
}
</script>

<style></style>

<template>
  <div class="home">
    <header></header>
    <main><Banner></Banner></main>
    <footer><Tab :data="store.state.goods.tabSort"></Tab></footer>
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

<style>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home header {
  width: 100%;
  height: 50px;
}
.home footer {
  width: 100%;
  height: 50px;
}
.home main {
  flex: 1;
  /* overflow: hidden; */
}
</style>

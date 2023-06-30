<template>
  <div>
    <Banner></Banner>
    <Tab></Tab>
  </div>
</template>

<script lang="ts">
import Banner from '../../../../components/Banner.vue'
import Tab from '../../../../components/Tab.vue'
import { useStore } from 'vuex'
export default {
  components: { Banner, Tab },
  methods: {},
  setup() {
    const store = useStore()
    const data = {
      data: []
    }
    const getGoods = () => {
      store.dispatch('goods/GET_GOODS_ALL')
      data.data = store.state
    }

    return {
      data
    }
  }
}
</script>

<style></style>

<template>
  <div>
    <BackBar></BackBar>
    <ShopCard></ShopCard>
    <ShopBar :checkAll="store.state.carts.checkAll" :checkAllChange="checkAll"></ShopBar>
  </div>
</template>

<script lang="ts">
import ShopBar from '../../../../components/ShopBar.vue'
import ShopCard from '../../../../components/ShopCard.vue'
import BackBar from '../../../../components/BackBar.vue'
import { useStore } from 'vuex'
export default {
  components: {
    ShopCard,
    ShopBar,
    BackBar
  },
  setup() {
    const store = useStore()
    const checkAll = () => {
      store.commit('carts/CHECKALL')
    }
    return {
      store,
      checkAll
    }
  }
}
</script>

<style></style>

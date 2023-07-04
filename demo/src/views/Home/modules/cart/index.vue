<template>
  <div>
    <BackBar></BackBar>
    <ShopCard :data="store.state.carts.data" :editNum="editNum"></ShopCard>
    <ShopBar :checkAll="store.state.carts.checkAll" :checkAllChange="checkAll"></ShopBar>
  </div>
</template>

<script lang="ts">
import ShopBar from '../../../../components/ShopBar.vue'
import ShopCard from '../../../../components/ShopCard.vue'
import BackBar from '../../../../components/BackBar.vue'
import { useStore } from 'vuex'
import { onMounted } from 'vue'
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
    // const
    const editNum = (id: number, type: number) => {
      store.dispatch('carts/EDIT_CART_NUM', { _id: id, type: type })
    }
    onMounted(async () => {
      await store.dispatch('carts/GET_CART_DATA')
      console.log(store.state.carts)
    })
    return {
      store,
      checkAll,
      editNum
    }
  }
}
</script>

<style></style>

<template>
  <div>
    <a-anchor>
      <van-sidebar v-model="active" @change="onChange">
        <van-sidebar-item v-for="(item, index) in store.state.goods.tabSort" :key="index" :title="item.title" />
      </van-sidebar>
    </a-anchor>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { showToast } from 'vant'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const active = ref(0)
    const store = useStore()
    onMounted(() => {
      setTimeout(() => {
        getTabSort()
      }, 0.1)
    })
    const onChange = (index: number) => showToast(`标签名 ${index + 1}`)
    const getTabSort = () => {
      store.dispatch('goods/GET_TAB_SORT')
      console.log(store.state.goods.tabSort)
    }
    return { active, onChange, store, getTabSort }
  }
})
</script>

<style></style>

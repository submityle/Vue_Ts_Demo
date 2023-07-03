<template>
  <div class="classify">
    <a-anchor>
      <van-sidebar v-model="active" @change="onChange">
        <van-sidebar-item v-for="(item, index) in store.state.goods.tabSort" :key="index" :title="item.title" />
      </van-sidebar>
    </a-anchor>
    <div class="classify_right">
      <div v-for="(item, index) in store.state.goods.tabData" :key="index">
        <div style="margin: 20px 10px; width: 50%">
          <!-- <h3>{{ store.state.goods.tabSort[index].title }}</h3> -->
          <img :src="item.img_url" alt="" style="width: 80px; height: 80px" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
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
      store.dispatch('goods/GET_TAB_DATA')
      // console.log(store.state.goods.tabData)

      // console.log(store.state.goods.tabSort)
    }
    return { active, onChange, store, getTabSort }
  }
})
</script>

<style>
.classify {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.classify_right {
  width: 90%;
  margin: 0 5%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.classify_right div {
}
</style>

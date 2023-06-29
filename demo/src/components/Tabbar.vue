<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" v-for="(item, index) in data" :key="index">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
interface propsData {
  path: string
  name: string
}
export default defineComponent({
  props: {
    data: null
  },
  setup() {
    // console.log(props)

    const active = ref(0)

    return { active }
  }
})
</script>

<style></style>

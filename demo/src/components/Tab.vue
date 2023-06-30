<template lang="">
  <van-tabs v-model:active="active" sticky>
    <van-tab v-for="(item, index) in data" :title="item.title" :key="index">内容 {{ index }}</van-tab>
  </van-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    data: Array
  },
  setup(props) {
    const active = ref(0)
    return { props, active }
  }
})
</script>
<style lang=""></style>

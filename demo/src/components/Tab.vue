<template lang="">
  <van-tabs v-model:active="active" sticky>
    <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">内容 {{ index }}</van-tab>
  </van-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const active = ref(0)
    return { active }
  }
})
</script>
<style lang=""></style>

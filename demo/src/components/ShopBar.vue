<template lang="">
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="checked">全选</van-checkbox>
    <template #tip>
      你的收货地址不支持配送,
      <span @click="onClickLink">修改地址</span>
    </template>
  </van-submit-bar>
</template>
<script lang="ts">
import { showToast } from 'vant'
export default {
  setup() {
    const onSubmit = () => showToast('点击按钮')
    const onClickLink = () => showToast('修改地址')
    return { onSubmit, onClickLink }
  }
}
</script>
<style lang=""></style>

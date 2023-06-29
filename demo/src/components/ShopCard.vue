<template lang="">
  <a-card hoverable style="width: 100%">
    <template #cover>
      <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
    </template>
    <template #extra><a-button type="primary" danger shape="circle" size="large">X</a-button></template>
    <template #actions>
      <a-button
        type="primary"
        shape="circle"
        size="middle
"
      >
        +
      </a-button>
      <div>num</div>
      <a-button
        type="primary"
        shape="circle"
        size="middle
"
      >
        -
      </a-button>
    </template>
    <a-card-meta title="title" description="This is the description">
      <template #avatar></template>
    </a-card-meta>
    <template #title><a-checkbox v-model:checked="checked">title</a-checkbox></template>
  </a-card>
</template>
<script lang="ts">
// import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return { checked: ref(false) }
  }
})
</script>
<style lang=""></style>

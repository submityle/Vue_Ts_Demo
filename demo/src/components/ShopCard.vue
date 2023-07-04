<template lang="">
  <div>
    <a-card hoverable style="width: 100%" v-for="(item, index) in data" :key="index">
      <template #cover>
        <img alt="example" :src="item.image_full_url" />
      </template>
      <template #extra><a-button type="primary" danger shape="circle" size="large">X</a-button></template>
      <template #actions>
        <a-button type="primary" shape="circle" size="middle" @click="() => enitNum(item._id, 1)">+</a-button>
        <div>{{ item.num }}</div>
        <a-button type="primary" shape="circle" size="middle" @click="() => enitNum(item._id, 0)">-</a-button>
      </template>
      <a-card-meta :title="item.name" description="This is the description">
        <template #avatar></template>
      </a-card-meta>
      <template #title><a-checkbox v-model:checked="checked">title</a-checkbox></template>
    </a-card>
  </div>
</template>
<script lang="ts">
// import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    data: Array,
    editNum: Function
  },
  setup(props) {
    return { checked: ref(false), props }
  }
})
</script>
<style lang=""></style>

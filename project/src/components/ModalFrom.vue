<template lang="">
  <a-modal :visible="visible" title="Basic Modal" @ok="handleOk" @cancel="handleCancel">
    <div>
      <a-form
        ref="formRef"
        name="custom-validation"
        :model="data"
        v-for="(item, index) in dataBase"
        :key="index"
      >
        <a-form-item has-feedback :label="item.title" :name="item.dataIndex">
          <a-input v-model:value="data[item.key]" />
        </a-form-item>
      </a-form>
    </div>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { FormInstance } from 'ant-design-vue'

export default defineComponent({
  props: {
    visible: {
      type: Boolean
    },
    handleOk: {
      type: Function
    },
    handleCancel: {
      type: Function
    },
    data: {
      type: Object
    }
  },
  setup(props) {
    const formRef = ref<FormInstance>()
    const dataBase = [
      { title: '标题', dataIndex: 'name', key: 'name' },
      {
        title: '图片',
        dataIndex: 'image_url',
        key: 'image_url'
      },
      { title: '描述', dataIndex: 'desc', key: 'desc' },
      { title: '状态', dataIndex: 'status', key: 'status' },
      { title: '价格', dataIndex: 'price', key: 'price' }
    ]
    return { formRef, props, dataBase }
  }
})
</script>
<style lang=""></style>

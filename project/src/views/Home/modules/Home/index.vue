<template lang="">
  <div>
    <ModalFrom
      :visible="visible"
      :handleOk="fromHandleOk"
      :data="modalFromData"
      :handleCancel="formHandleCancel"
    ></ModalFrom>
    <a-form
      :model="formState"
      name="basic"
      layout="inline"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="搜索"
        name="SearchQuery"
        :rules="[{ required: true, message: 'Please input your SearchQuery!' }]"
      >
        <a-input v-model:value="formState.SearchQuery" />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-tooltip title="搜索">
          <a-button type="primary" shape="circle" html-type="submit">
            <template #icon><SearchOutlined /></template>
          </a-button>
        </a-tooltip>
      </a-form-item>
    </a-form>
    <a-button type="primary" shape="round" @click="showModal">
      <template #icon>
        <!-- home页子路由 -->
        <PlusOutlined />
      </template>
      添加
    </a-button>
    <Tables :data="store.data" :onEdit="tableEdit"></Tables>
  </div>
</template>
<script lang="ts">
import { SearchOutlined, PlusOutlined } from '@ant-design/icons-vue'

import { defineComponent, reactive, ref } from 'vue'
import Tables from '../../../../components/Tables.vue'
import ModalFrom from '../../../../components/ModalFrom.vue'
import type { dataType } from '../../../../type/dataType'
import { useGoodsStore } from '../../../../stores/goods'
export default defineComponent({
  components: { Tables, ModalFrom, SearchOutlined, PlusOutlined },
  setup() {
    const store = useGoodsStore()
    store.getGoodsAllData()
    const visible = ref<boolean>(false)
    const formState = reactive<dataType.fromData_Type>({
      SearchQuery: ''
    })
    const modalFromData = reactive<dataType.fromData_Type>({
      name: '',
      image_url: '',
      desc: '',
      status: 0,
      price: 0
    })
    const onFinish = (values: any) => {
      console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    const showModal = () => {
      visible.value = true
    }
    const fromHandleOk = (e: MouseEvent) => {
      // console.log(modalFromData)
      store.addGood(modalFromData)
      visible.value = false
    }
    const formHandleCancel = () => {
      visible.value = false
    }
    const tableEdit = (item: dataType.goodData_Type) => {
      console.log(item)
      visible.value = true
      // store.editGood(item)
    }
    return {
      store,
      formState,
      visible,
      modalFromData,
      onFinish,
      onFinishFailed,
      showModal,
      fromHandleOk,
      formHandleCancel,
      tableEdit
    }
  }
})
</script>
<style lang=""></style>

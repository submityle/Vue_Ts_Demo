<template lang="">
  <a-table :columns="columns" :data-source="data">
    <template #headerCell="{ column }"> </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-if="column.key === 'image_url'"><a-image :src="record.image_url" /> </template>

      <template v-if="column.key === 'status'">
        <a-tag :color="record.status === 0 ? 'pink' : '#6a3bca'">{{
          record.status === 0 ? '已下架' : '上架'
        }}</a-tag>
      </template>
      <template v-if="column.key === 'price'">
        <a> ￥{{ record.price * 0.01 }} </a>
      </template>

      <template v-if="column.key === 'action'">
        <span>
          <a-button
            type="primary"
            shape="round"
            @confirm="onPut(record)"
            @click="() => onEdit(record)"
            >编辑</a-button
          >
          <a-button type="primary" danger shape="round" @confirm="onDelete(record)">删除</a-button>
        </span>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts">
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Tables',
  components: { SmileOutlined, DownOutlined },
  props: {
    data: {
      type: Array
    },
    onEdit: Function
  },
  setup(props) {
    const columns = [
      { title: 'ID', dataIndex: '_id', key: '_id' },
      { title: '标题', dataIndex: 'name', key: 'name' },
      { title: '图片', dataIndex: 'image_url', key: 'image_url' },
      { title: '描述', dataIndex: 'desc', key: 'desc' },
      { title: '状态', dataIndex: 'status', key: 'status' },
      { title: '价格', dataIndex: 'price', key: 'price' },
      { title: '编辑', key: 'action' }
    ]

    return {
      props,
      columns
    }
  }
})
</script>
<style lang="" scoped></style>

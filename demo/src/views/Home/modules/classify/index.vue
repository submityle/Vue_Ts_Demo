<template>
  <div>
    <a-anchor>
      <van-sidebar v-model="active" @change="onChange">
        <van-sidebar-item title="标签名 1" />
        <van-sidebar-item title="标签名 2" />
        <van-sidebar-item title="标签名 3" />
      </van-sidebar>
    </a-anchor>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { showToast } from 'vant'

export default defineComponent({
  setup() {
    const active = ref(0)
    const onChange = (index: number) => showToast(`标签名 ${index + 1}`)
    return { active, onChange }
  }
})
</script>

<style></style>

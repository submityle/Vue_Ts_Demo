<template lang="">
  <div><van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" /></div>
</template>
<script lang="ts">
export default {
  setup() {
    const onClickLeft = () => history.back()
    return { onClickLeft }
  }
}
</script>
<style lang=""></style>

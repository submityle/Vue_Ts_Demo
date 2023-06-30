<template>
  <div>
    <BackBar></BackBar>
    <ShopCard></ShopCard>
    <ShopBar></ShopBar>
  </div>
</template>

<script lang="ts">
import ShopBar from '../../../../components/ShopBar.vue'
import ShopCard from '../../../../components/ShopCard.vue'
import BackBar from '../../../../components/BackBar.vue'
export default {
  components: {
    ShopCard,
    ShopBar,
    BackBar
  }
}
</script>

<style></style>

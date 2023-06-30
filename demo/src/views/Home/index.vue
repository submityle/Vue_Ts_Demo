<template>
  <div>
    <header></header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <Tabbar :data="homeRouter"></Tabbar>
    </footer>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { homeRouter } from '../../router/modules/homeRouter'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Tabbar from '../../components/Tabbar.vue'
export default {
  components: {
    Tabbar
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const formState = reactive({
      homeRouter: homeRouter
    })
    return {
      homeRouter
    }
  }
}
</script>

<style></style>

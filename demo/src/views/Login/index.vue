<template>
  <div>
    <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item label="Username" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox :checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">登录</a-button>
        <a-button type="" @click="toEnroll">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
interface FormState {
  username: string
  password: string
  remember: boolean
}
export default defineComponent({
  setup() {
    const router = useRouter()
    const store = useStore()
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true
    })
    const onFinish = async (values: any) => {
      // console.log('Success:', values)
      console.log(store)

      store.dispatch('login/_login', values)
      // store.commit('login/setState',{})
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    const toEnroll = () => {
      router.push({ path: '/enroll' })
    }

    return {
      formState,
      onFinish,
      onFinishFailed,
      toEnroll
    }
  }
})
</script>

<style></style>
../../store/modules/login

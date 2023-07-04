import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { USER_LOGIN } from '../api/user'
export const useLoginStore = defineStore('login', {
  state() {
    return {
      userInfo: {},
      token: ''
    }
  },
  actions: {
    async _login(payload: any) {
      const login = await USER_LOGIN(payload)
      // console.log(login)
      if (login.data.code === 200) {
        this.userInfo = login.data.userInfo
        this.token = login.data.token
        localStorage.setItem('token', login.data.token)
        alert('登录成功')
        window.location.href = '/home/index'
      }
    }
  }
})

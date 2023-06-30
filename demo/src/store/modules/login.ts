import { _login } from '@/api'
const login = {
  namespaced: true,
  state: {
    userInfo: {},
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    setState(state: any, payload: any) {
      state[payload.key] = payload.valueas
    }
  },
  actions: {
    async _login(context: any, payload: any) {
      const login = await _login(payload)
      // console.log(login)
      if (login.data.code === 200) {
        context.commit('setState', {
          key: 'userInfo',
          value: login.data.userInfo
        })
        context.commit('setState', {
          key: 'token',
          value: login.data.token
        })
        localStorage.setItem('token', login.data.token)
        alert('登录成功')
        window.location.href = '/home/index'
      }
    }
  }
}
export default login

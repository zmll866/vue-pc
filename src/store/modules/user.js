
import { login } from '@/api/user'
import { setToken, getToken } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: null || getToken()
  },
  mutations: {
    updatetoken (state, payload) {
      state.token = payload
      setToken(payload)
      // console.log(ret)
    }
  },
  actions: {
    async login (context, payload) {
      try {
        const ret = await login(payload)
        if (ret.data.code === 10000) {
          // 登录成功
          // window.sessionStorage.setItem('mytoken', ret.data.data)
          // 缓存token
          context.commit('updatetoken', ret.data.data)
          return true
        } else {
          return false
        }
      } catch {
        return false
      }
    }
  }
}

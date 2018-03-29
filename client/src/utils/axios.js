import axios from 'axios'
import store from '../store'
import router from '../router'

// 全局设置默认值
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 创建一个axios实例
const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
})
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.request.use = instance.interceptors.request.use

instance.interceptors.request.use(
  (config) => {
    if (store.state.user.token) {
      config.headers.Authorization = `Bearer ${store.state.user.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => { // 默认除了2xx以外的都是错误的，会走这里
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.dispatch('userLogout') // 可能是token过期，清除它
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
          break
        default:
      }
    }
    return Promise.reject(error.message)
  }
)

// export function get(url, payload = {}) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, {
//       params: payload
//     })
//       .then((res) => {
//         resolve(res.data)
//       })
//       .catch((err) => {
//         reject(err)
//       })
//   })
// }

export default instance

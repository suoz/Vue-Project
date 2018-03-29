import { getUser } from '../../../services/user'

const module = {
  state: {
    username: '',
    token: ''
  },
  getters: {},
  mutations: {
    updateUser: (state, payload) => {
      state = {
        ...state,
        ...payload
      }
    }
  },
  actions: {
    updateUser: ({ state, commit, rootState }, token) => {
      // 根据token获取用户数据
      getUser(token).then((res) => {
        const { data } = res.data
        if (data && data !== {}) {
          commit('updateUser', data)
        }
      }).catch((err) => {
        console.warn(err)
      })
    }
  }
}

export default module

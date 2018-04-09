import { getUser } from '../../../services/user'

const module = {
  // namespaced: true, // 模块内部的actions、mutations、getter是注册在全局命名空间的
  state: {
    token: '',
    username: '',
    birthday: '',
    gender: '',
    createTime: '',
    phone: '',
    email: '',
    address: '',
  },
  getters: {},
  mutations: {
    updateUser: (state, token) => {
      state.token = token
    },
    getUser: (state, { data, rootState }) => {
      rootState.user = data
    },
    userLogout: (state, { rootState }) => {
      rootState.user = {}
    }
  },
  actions: {
    getUser: ({ state, commit, rootState }) => {
      // 根据token获取用户数据
      getUser().then((res) => {
        const { data } = res.data
        if (data && data !== {}) {
          commit('getUser', {
            data,
            rootState
          })
        }
      }).catch((err) => {
        console.warn(err)
      })
    },
    userLogout: ({ state, commit, rootState }) => {
      commit('userLogout', { rootState })
    }
  }
}

export default module

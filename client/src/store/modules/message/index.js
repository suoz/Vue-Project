import { getMessage } from '../../../services/message'

const module = {
  // namespaced: true, // 模块内部的actions、mutations、getter是注册在全局命名空间的
  state: {
    firstLoad: true, // 第一次进入message页
    msgList: [], // 消息首页列表,
  },
  getters: {
    msgListGetter: state => state.msgList,
    userInfoGetter: state => state.userInfo,
  },
  mutations: {
    firstLoadMutation: (state, flag) => {
      state.firstLoad = flag
    },
    updateListMutation: (state, data) => {
      // 首页列表替换更新
      state.msgList.forEach((item) => {
        if (item.userId === data.fromUser) {
          item.message = `${data.username}:${data.message}`
          item.time = data.time
          item.username = data.username
          // 当前聊天不增加未读标识
          if (data.isNow) return
          // 增加未读消息数
          // if (!data.unread) {
          //   data.unread = unread + 1
          // } else {
          //   ele.unread += 1
          // }
        } else if (item.userId === data.toUser) {
          item.message = `${this.$store.state.user.username}:${data.message}`
          item.time = data.time
        }
      })
    },
    msgListMutation: (state, { data }) => {
      state.msgList = data
    },
    updateUserInfo: (state, { data } ) => {
      state.userInfo = data
    }
  },
  actions: {
    userInfoAction: ({ commit }, userId) => {
      // getUserInfo(userId).then((res) => {
      //   const { data } = res.data
      //   commit('updateUserInfo', data)
      // })
    },
    msgListAction: ({ commit }, userId) => {
      getMessage(userId).then((res) => {
        const { data } = res.data
        commit('msgListMutation', { data })
      }).catch((err) => {
        throw err
      })
    }
  }
}

export default module

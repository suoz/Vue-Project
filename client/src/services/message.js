import axios from '../utils/axios'

export function loginUser(payload) {
  return axios.post('/users/loginUser', payload)
}

// 获取首页聊天列表
export function getMessage(userId) {
  return axios.get('/message/getMessage', {
    params: {
      userId
    }
  })
}

// 获取详情聊天信息
export function getChat(userId, otherUserId) {
  return axios.get('/message/getChat', {
    params: {
      userId,
      otherUserId
    }
  })
}

// 发送详情聊天信息 保存数据
export function saveMessage(data) {
  return axios.post('/message/saveMessage', { data })
}

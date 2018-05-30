const message = require('../lib/message')

exports.getMessage = async (ctx) => {
  const { userId } = ctx.request.query
  const res = await message.getMessage(userId)
  ctx.body = res
}

// 获取用户对话列表信息
exports.getChat = async (ctx) => {
  const { userId, otherUserId } = ctx.request.query
  const res = await message.getChat(userId, otherUserId)
  ctx.body = res
}

exports.saveMessage = async (ctx) => {
  const { data } = ctx.request.body
  const res = await message.saveMessage(data)
  ctx.body = res
}
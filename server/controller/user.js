const userLib = require('../lib/user')

//用户注册
exports.registerUser = async (ctx, next) => {
  userLib.register(ctx)
  ctx.body = {
    success: true,
    message: '注册成功'
  }
}

// 用户登录
exports.loginUser = async (ctx, next) => {
  const { username, password } = ctx.request.body
  const res = await userLib.login({ username, password })
  const { success, message, token } = res
  ctx.status = 200
  if (success) {
    ctx.body = {
      username,
      token
    }
  } else {
    ctx.body = {
      message
    }
  }
}

// 获取用户
exports.getUser = async (ctx, next) => {
  const token = ctx.header.authorization.split(' ')[1]
  let res = await userLib.getUser(token)
  ctx.body = res
}
  
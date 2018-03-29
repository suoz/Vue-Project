const userLib = require('../../lib/user')
// 用户登录
exports.loginUser = async (ctx, next) => {
  ctx.body = {
    username: '123',
    password: '123123'
  }
}

//用户注册
exports.registerUser = async (ctx, next) => {
  console.log('registerUser', ctx.request.body);
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
  const { success, message, username: name, token } = res
  ctx.status = 200
  if (success) {
    ctx.body = {
      username: name,
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
  ctx.body = {
    username: 'suoz',
    age: 18
  }
}
  
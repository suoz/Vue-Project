const mongoose = require('../../utils/mongodb')
const createToken = require('../../utils/createToken')
const bcrypt = require('bcryptjs')
const objectIdToTimestamp = require('objectid-to-timestamp')
const moment = require('moment')
const salt = bcrypt.genSaltSync(10)

// 声明scheme (collection结构)
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  token: String
})

// 根据Scheme生成model（User表）
const userModel = mongoose.model('User', userSchema)

// 操作数据库
// 用户创建
exports.register = async (ctx) => {
  const username = ctx.request.body.username
  const password = bcrypt.hashSync(ctx.request.body.password, salt)
  const token = createToken(username)
  let user = new userModel({
    username,
    password,
    token
  })
  user.create_time = moment(objectIdToTimestamp(user._id)).format('YYYY-MM-DD HH:mm:ss');
  await new Promise((resolve, reject) => {
    user.save((err) => {
      if (err) {
        reject(err)
      }
        resolve()
    })
  })
}

const findOne = (key, value, password) => {
  return new Promise((resolve, reject) => {
    userModel.findOne({ [key]: value }, { password }, (err, doc) => {
      if (err) {
        reject(err)
      }
      resolve(doc)
    })
  })
}

// 用户登录
exports.login = async ({ username, password }) => {
  let doc = await findOne('username', username, 1)
  if (doc && bcrypt.compareSync(password, doc.password)) {
    const token = createToken(username)
    doc.token = token
    return new Promise((resolve, reject) => {
      doc.save((err, doc) => {
        if (err) {
          reject(err)
        }
        resolve({
          success: true,
          token: doc.token
        })
      })
    })
  } else {
    return {
      success: false,
      message: '账号不存在或密码错误'
    }
  }
  return result
}

exports.getUser = async (token) => {
  return findOne('token', token, 0)
}

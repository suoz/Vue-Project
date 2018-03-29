const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(config.mongodb_url)

const db = mongoose.connection

// 防止mongoose: mpromise错误
mongoose.Promise = global.Promise

db.on('error', () => {
  console.log('数据库连接出错!')
})

db.on('open', () => {
  console.log('数据库连接成功!')
})

module.exports = mongoose
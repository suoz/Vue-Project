let development = require('./development')
let test = require('./test')

// 根据不同的NODE_ENV，输出不同的配置对象(默认输出development的配置对象)
module.exports = {
  development,
  test
}[process.env.NODE_ENV || 'development']
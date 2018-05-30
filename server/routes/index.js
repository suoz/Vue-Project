var router = require('koa-router')()
var user = require('./user')
var healthInfo = require('./healthInfo')
var message = require('./message')

router.use('/api/users', user.routes(), user.allowedMethods())
router.use('/api/healthInfo', healthInfo.routes(), healthInfo.allowedMethods())
router.use('/api/message', message.routes(), message.allowedMethods())

module.exports = router

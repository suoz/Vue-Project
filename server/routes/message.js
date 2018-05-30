const router = require('koa-router')()
const message = require('../controller/message')

router.get('/getMessage', message.getMessage)
router.get('/getChat', message.getChat)
router.post('/saveMessage', message.saveMessage)

module.exports = router

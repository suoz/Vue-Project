const router = require('koa-router')()
const user = require('../controller/user')

router.post('/loginUser', user.loginUser)
router.get('/getUser', user.getUser)
router.post('/registerUser', user.registerUser)

module.exports = router

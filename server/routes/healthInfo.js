const router = require('koa-router')()
const healthInfo = require('../controller/healthInfo')

router.get('/getHealthInfo', healthInfo.getHealthInfo)
router.get('/getHealthDetail', healthInfo.getHealthDetail)

module.exports = router

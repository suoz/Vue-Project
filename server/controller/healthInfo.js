const healthInfoLib = require('../lib/healthInfo')

exports.getHealthInfo = async (ctx) => {
  const { theme } = ctx.request.query
  const res = await healthInfoLib.getHealthInfo(theme)
  ctx.body = res
}

exports.getHealthDetail = async (ctx) => {
  const { slug } = ctx.request.query
  const res = await healthInfoLib.getHealthDetail(slug)
  ctx.body = res 
}

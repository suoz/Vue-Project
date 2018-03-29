const jwt = require('jsonwebtoken')

// 登录时：核对用户名和密码成功后，应用将用户的id作为jwt payload的一个属性
module.exports = (user_id) => {
    return jwt.sign({
        user_id
    }, 'sinner77', {
        expiresIn: '60s' // 过期时间设置为60妙。那么decode这个token的时候得到的过期时间为 : 创建token的时间 +　设置的值
    })
}
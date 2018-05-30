const mongoose = require('../utils/mongodb')

const userSchema = new mongoose.Schema({
  userId: String,
  socketId: String,
  status: String,
  // relations: {type: mongoose.Schema.Types.ObjectId, ref: 'relation'},
})

const privateMsgSchema = new mongoose.Schema({
  fromUser: String,
  toUser: String,
  message: String,
  time: String
})

const relationSchema = new mongoose.Schema({
  userId: String,
  otherUserId: String,
  remark: String,
  // users: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
})

const userModel = mongoose.model('user', userSchema, 'users')
const privateMsgModel = mongoose.model('privateMsg', privateMsgSchema, 'privateMsgs')
const relationModel = mongoose.model('relation', relationSchema, 'relations')

exports.getMessage = async (userId) => {
  const relationDoc = await relationModel.find({userId}, 'otherUserId').lean()

  const Rpromises = relationDoc && relationDoc.map(item => {
    return userModel.findOne({userId: item.otherUserId}, 'userId username status').lean()
  })
  let otherUserDoc = await Promise.all(Rpromises)

  const Ppromises = otherUserDoc && otherUserDoc.map(item => {
    return privateMsgModel.findOne({"$or": [{
      "$and": [{fromUser: userId}, {toUser:  item.userId}]
    }, {
      "$and": [{fromUser:  item.userId}, {toUser: userId}]
    }]})
    .sort({'time': -1}) // 倒序（从近到远）
    .lean() // 转化为js对象
  })

  const doc = await Promise.all(Ppromises)
  let res = []
  for(let index in doc) {
    if (doc[index]) {
      const fromUser = await userModel.findOne({userId: doc[index].fromUser}, 'username').lean()
      doc[index].message = `${fromUser.username} : ${doc[index].message}`
      res.push(Object.assign({}, doc[index], otherUserDoc[index]))
    }
  }

  return res
}

// [ 
//   { _id: 5abb45bd632bd5e1cb6522e1,
//     username: '123123',
//     userId: '2',
//     status: '1',
//     message: '123123 : hello, admin' },
//   { _id: 5abb45bd632bd5e1cb6522e0,
//     username: 'lufei',
//     userId: '3',
//     status: '1',
//     message: 'lufei : aaaa' } 
// ]


exports.getChat = async (userId, otherUserId) => {
  const user = await userModel.findOne({userId}, 'username').lean()
  const otherUser = await userModel.findOne({userId: otherUserId}, 'username').lean()
  
  let res = await privateMsgModel.find({"$or": [{
    "$and": [{fromUser: userId}, {toUser: otherUserId}]
  }, {
    "$and": [{fromUser: otherUserId}, {toUser: userId}]
  }]})
  .sort({'time': 1}) // 正序（从远到近）
  .lean() // 转化为js对象

  res = res.map(item => {
    if (item.fromUser === userId) {
      item.username = user.username
    } else if (item.fromUser === otherUserId) {
      item.username = otherUser.username
    }
    return item
  })

  return res
}

exports.saveMessage = async (data) => {
  delete data.username
  const privateMsg = new privateMsgModel(data)
  await new Promise((resolve, reject) => {
    privateMsg.save((err) => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}
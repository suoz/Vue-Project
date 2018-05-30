const mongoose = require('../utils/mongodb')

const Schema = new mongoose.Schema({
  username: String,
  password: String,
  token: String
  // abscract: Object
})

const Model = mongoose.model('Info', Schema, 'infos')

exports.getHealthInfo = async (theme) => {
  return Model.find({theme}, (err, docs) => {
    return docs
  })
}

exports.getHealthDetail = async (slug) => {
  return Model.findOne({slug}, (err, docs) => {
    return docs
  })
}
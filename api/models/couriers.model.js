const {Schema, model} = require('mongoose')

const courierSchema = new Schema({
  name: String
})

module.exports = model('courier', courierSchema)
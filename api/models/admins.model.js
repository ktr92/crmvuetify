const {Schema, model} = require('mongoose')

const adminSchema = new Schema({
  name: String
})

module.exports = model('admins', adminSchema)
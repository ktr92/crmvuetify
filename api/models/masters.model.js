const {Schema, model} = require('mongoose')

const masterSchema = new Schema({
  name: String
})

module.exports = model('masters', masterSchema)
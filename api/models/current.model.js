import {model, Schema} from 'mongoose'

const currentSchema = new Schema({
  admin: String,
  date: String
})

module.exports = model('current', currentSchema) 

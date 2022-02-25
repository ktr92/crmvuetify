import {model, Schema} from 'mongoose'

const currentSchema = new Schema({
  admin: String,
  date: Date
})

module.exports = model('current', currentSchema) 

const {Schema, model} = require('mongoose')

const daysSchema = new Schema({
  number: {
    type: String
  },
  date: {
    type: Date,
  },
  admin: {
    type: String
  },
  from: {
    type: String
  },
  phone: {
    type: Number
  },
  name: {
    type: String
  },
  n100: {
    type: Number
  },
  n150: {
    type: Number
  },
  n200: {
    type: Number
  },
  n250: {
    type: Number
  },
  n300: {
    type: Number
  },
  n350: {
    type: Number
  },
  n400: {
    type: Number
  },
  n450: {
    type: Number
  },
  n500: {
    type: Number
  },
  n550: {
    type: Number
  },
  n600: {
    type: Number
  },
  percent1: {
    type: Number
  },
  summ: {
    type: Number
  },
  master: {
    type: String
  },
  sale: {
    type: Number
  },
  percent2: {
    type: Number
  },
  total: {
    type: Number
  },
  commentOrder: {
    type: String
  },
  commentClient: {
    type: String
  },
  blacklist: {
    type: String
  },
  location: {
    type: String
  }
})

module.exports = model('orders', daysSchema)
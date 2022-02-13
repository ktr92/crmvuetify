const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const keys = require('./keys')
const daysRoutes = require('./routes/days.routes')
const adminsRoutes = require('./routes/admins.routes')
const app = express()


mongoose.connect(keys.MONGO_URI, {})
  .then(() => console.log('MongoDB connected'))
  .catch((e) => console.log(e))

  app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(bodyParser.json())

app.use('/api/days', daysRoutes)
app.use('/api/admins', adminsRoutes)


module.exports = app

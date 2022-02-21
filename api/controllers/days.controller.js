const Days = require('../models/days.model')
const Current = require('../models/current.model')

module.exports.getAll = async (req, res) => {
  try {
    const days = await Days.find()
    res.status(200).json(days)
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports.getOne = async (req, res) => {
  try {
    const days = await Days.find({date: req.params.id})
    res.status(200).json(days)
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports.getAdmins = async (req, res) => {
  try {
    const admins = await Days.distinct('admin')
    res.status(200).json(admins)
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports.addRow = async (req, res) => {
  try {
    const row = new Days({...req.body})
    await row.save()
    res.status(201).json(row)
  } catch (error) {
    /* console.log(error) */
    res.status(500).json(error)
  }
}
module.exports.checkDay = async (req, res) => {
  try {
    const day = await Current.find({date: req.body.date})
    res.status(200).json(day) 
  } catch (error) {
    /* console.log(error) */
    res.status(500).json(error)
  }
}
module.exports.setCurrent = async (req, res) => {
  try {
    const day = await new Current({...req.body})
    await day.save()
    res.status(201).json(day) 
  } catch (error) {
    /* console.log(error) */
    res.status(500).json(error)
  }
}
module.exports.getInfo = async (req, res) => {
  try {
    const client = await Days.find({phone: req.params.id})
    res.status(200).json(client)
  } catch (error) {
    res.stattus(500).json(error)
  }
}
/* 
module.exports.setAdmins = async (req, res) => {
  
  const  

  const adminsSchema = new Post({
    title: req.body.title,
    text: req.body.text,
    imageUrl: `/${req.file.filename}`
  })


  try {
    await adminsSchema.save()
    res.status(201).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
} */
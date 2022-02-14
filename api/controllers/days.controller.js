const Days = require('../models/days.model')

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
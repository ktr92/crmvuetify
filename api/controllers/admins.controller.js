const Admins = require('../models/admins.model')

module.exports.getAll = async (req, res) => {
  try {
    const admins = await Admins.find()
    res.status(200).json(admins)
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports.addNew = async (req, res) => {
  
  const admin = new Admins({
    name: req.body.name
  })
  
  try {
    const check = await Admins.find({name: req.body.name})
   
    if (check.length > 0) {
      res.status(409).json(admin)
   
    } else {
      await admin.save()
      res.status(201).json(admin)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
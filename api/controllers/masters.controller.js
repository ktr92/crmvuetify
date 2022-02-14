const Masters = require('../models/masters.model')

module.exports.getAll = async (req, res) => {
  try {
    const masters = await Masters.find()
    res.status(200).json(masters)
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports.addNew = async (req, res) => {
  
  const master = new Masters({
    name: req.body.name
  })
  
  try {
    const check = await Masters.find({name: req.body.name})
   
    if (check.length > 0) {
      res.status(409).json(master)
   
    } else {
      await master.save()
      res.status(201).json(master)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
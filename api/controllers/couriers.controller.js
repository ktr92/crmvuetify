const Courier = require('../models/couriers.model')

module.exports.getAll = async (req, res) => {
  try {
    const couriers = await Courier.find()
    res.status(200).json(couriers)
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports.addNew = async (req, res) => {
  
  try {
    const check = await Courier.find({name: req.body.name})
   
    if (check.length > 0) {      
      res.status(409).json({})   
    } else {
      const courier = new Courier({
        name: req.body.name
      })
      await courier.save()
      res.status(201).json(courier)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
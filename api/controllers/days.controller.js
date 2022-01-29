const Days = require('../models/days.model')

module.exports.getAll = async (req, res) => {
  try {
    const days = await Days.find()
    res.status(200).json(days)
  } catch (error) {
    res.status(500).json(error)
  }
}
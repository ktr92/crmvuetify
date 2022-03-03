const {Router} = require('express')
const ctr = require('../controllers/couriers.controller')
const router = Router()

// /api/couriers
// days show
router.get('/', ctr.getAll)
router.post('/new', ctr.addNew)


module.exports = router
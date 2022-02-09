const {Router} = require('express')
const ctr = require('../controllers/days.controller')
const router = Router()

// /api/days
// days show
router.get('/', ctr.getAll)
router.get('/:id', ctr.getOne)
/* router.post('/', ctr.setAdmins) */

module.exports = router
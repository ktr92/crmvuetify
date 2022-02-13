const {Router} = require('express')
const ctr = require('../controllers/days.controller')
const router = Router()

// /api/days
// days show
router.get('/', ctr.getAll)
router.get('/one/:id', ctr.getOne)
router.get('/admins', ctr.getAdmins)
 
/* router.post('/', ctr.setAdmins) */

module.exports = router
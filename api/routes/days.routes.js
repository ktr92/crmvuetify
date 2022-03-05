const {Router} = require('express')
const ctr = require('../controllers/days.controller')
const router = Router()

// /api/days
// days show
router.get('/', ctr.getAll)
router.get('/one/:id', ctr.getOne)
router.get('/range/:id', ctr.getRange)
router.get('/admins', ctr.getAdmins)
router.post('/addrow', ctr.addRow)
router.put('/updaterow', ctr.updateRow)
router.post('/check', ctr.checkDay)
router.post('/current', ctr.setCurrent)
router.get('/clientinfo/:id', ctr.getInfo)

/* router.post('/', ctr.setAdmins) */

module.exports = router
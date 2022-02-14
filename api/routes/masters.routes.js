const {Router} = require('express')
const ctr = require('../controllers/masters.controller')
const router = Router()

// /api/admins
// days show
router.get('/', ctr.getAll)

router.post('/new', ctr.addNew)


module.exports = router
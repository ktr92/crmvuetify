const {Router} = require('express')
const ctr = require('../controllers/admins.controller')
const router = Router()

// /api/admins
// days show
router.get('/', ctr.getAll)

router.post('/new', ctr.addNew)


module.exports = router
const router = require('express').Router()
const controller = require('./controller')

router.get('/test', controller.getTitle)
router.put('/test', controller.putTitle)

module.exports = router

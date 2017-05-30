var router = require('express').Router()

router.use(require('./users'))
router.use('admin', require('../admin/base'))

module.exports = router

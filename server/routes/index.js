const express = require('express')
const router = express.Router({ mergeParams: true })

router.use('/product', require('./product.routes'))
router.use('/type', require('./type.routes'))
router.use('/auth', require('./auth.routes'))

module.exports = router

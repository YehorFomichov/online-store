const express = require('express')
const router = express.Router({ mergeParams: true })

router.use('/product', require('./product.routes'))
router.use('/cart', require('./cart.routes'))
router.use('/auth', require('./auth.routes'))
router.use('/user', require('./user.routes'))

module.exports = router

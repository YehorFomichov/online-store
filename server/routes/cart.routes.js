const express = require('express')
const Cart = require('../models/Cart')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
  try {
    const list = await Cart.find()
    res.status(200).send(list)
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка'
    })
  }
})
router.post('/', async (req, res) => {
  try {
    const { currentUserId, cart } = req.body

    if (currentUserId) {
      const order = await Cart.create({
        userId: currentUserId,
        orders: cart
      })
      res.status(201).send(order)
    } else {
      res.status(401).json({
        message: 'UNAUTHORISED'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка'
    })
  }
})

module.exports = router

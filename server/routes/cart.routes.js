const express = require('express')
const Cart = require('../models/Cart')
const router = express.Router({ mergeParams: true })

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const cartList = await Cart.find()
    const cart = cartList.filter((e) => {
      return JSON.stringify(e.userId) === JSON.stringify(userId)
    })
    res.status(200).send(cart)
  } catch (error) {
    res.status(500).json({
      message: 'Server error'
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
      message: 'Server error'
    })
  }
})

module.exports = router

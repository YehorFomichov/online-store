const express = require('express')
const Product = require('../models/Product')
const router = express.Router({ mergeParams: true })
const auth = require('../middleware/auth.middleware')
router.get('/', async (req, res) => {
  try {
    const list = await Product.find()
    res.status(200).send(list)
  } catch (error) {
    res.status(500).json({
      message: 'Server error'
    })
  }
})
router.get('/:productId', async (req, res) => {
  try {
    const { productId } = req.params
    const product = await Product.findOne({ _id: productId })
    res.status(200).send(product)
  } catch (error) {
    res.status(500).json({
      message: 'Server error'
    })
  }
})

router.patch('/:productId', auth, async (req, res) => {
  try {
    const { productId } = req.params
    if (productId && (req.user.id || req.user._id)) {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        req.body,
        { new: true }
      )
      res.send(updatedProduct)
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
router.post('/', auth, async (req, res) => {
  try {
    const payload = req.body

    if (req.user.id || req.user._id) {
      const newProduct = await Product.create(payload)
      res.status(201).send({
        newProduct
      })
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
router.delete('/:productId', auth, async (req, res) => {
  try {
    const { productId } = req.params
    if (req.user.id || req.user._id) {
      const newProduct = await Product.findByIdAndDelete(productId)
      res.status(201).send({
        newProduct
      })
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

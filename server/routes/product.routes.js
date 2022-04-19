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
      message: 'На сервере произошла ошибка'
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
      message: 'На сервере произошла ошибка'
    })
  }
})

router.patch('/:productId', auth, async (req, res) => {
  try {
    const { productId } = req.params

    if (productId && req.user._id) {
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
      message: 'На сервере произошла ошибка'
    })
  }
})
router.post('/', auth, async (req, res) => {
  try {
    const { category, image, price, rating, sex, title, type } = req.body
    if (req.user._id) {
      const updatedProduct = await Product.create({
        category,
        image,
        price,
        rating,
        sex,
        title,
        type
      })
      res.status(201).send({
        updatedProduct
      })
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

const express = require('express')
const User = require('../models/User')
const router = express.Router({ mergeParams: true })

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const user = await User.findOne({ _id: userId })
    res.status(200).send(user)
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка'
    })
  }
})

module.exports = router

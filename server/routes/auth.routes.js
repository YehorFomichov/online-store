const express = require('express')
const User = require('../models/User')
const router = express.Router({ mergeParams: true })
const bcrypt = require('bcryptjs')
const tokenService = require('../services/token.service')
const { check, validationResult } = require('express-validator')

router.post('/signUp', [
  check('email', 'Email is incorrect').isEmail(),
  check('password', 'Min password length is 8').isLength({ min: 8 }),
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'INVALID_DATA',
            code: 400
          }
        })
      }
      const { email, password, isAdmin, name } = req.body
      const existingUser = await User.findOne({
        email
      })
      if (existingUser) {
        return res.status(400).json({
          error: {
            message: 'EMAIL_EXISTS',
            code: 400
          }
        })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const newUser = await User.create({
        password: hashedPassword,
        isAdmin: false,
        name,
        email
      })

      const tokens = tokenService.generate({ _id: newUser._id })
      await tokenService.save(newUser._id, tokens.refreshToken)

      res.status(201).send({
        ...tokens,
        localId: newUser._id
      })
    } catch (error) {
      res.status(500).json({
        message: 'SERVER_ERROR'
      })
    }
  }
])

router.post('/signInWithPassword', [
  check('email', 'Email is incorrect').normalizeEmail().isEmail(),
  check('password', 'Password cannot be empty').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'INVALID_DATA',
            code: 400
          }
        })
      }

      const { email, password } = req.body
      const existingUser = await User.findOne({ email })
      if (!existingUser) {
        return res.status(400).send({
          message: 'EMAIL_NOT_FOUND',
          code: 400
        })
      }

      const isPasswordEqual = await bcrypt.compare(
        password,
        existingUser.password
      )
      if (!isPasswordEqual) {
        return res.status(400).send({
          message: 'INVALID_PASSWORD',
          code: 400
        })
      }

      const tokens = tokenService.generate({ _id: existingUser._id })
      await tokenService.save(existingUser._id, tokens.refreshToken)

      res.status(200).send({
        ...tokens,
        userId: existingUser._id
      })
    } catch (error) {
      res.status(500).json({
        message: 'На сервере произошла ошибка'
      })
    }
  }
])
router.post('/token', async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body
    const data = tokenService.validateRefresh(refreshToken)
    const dbToken = await tokenService.findToken(refreshToken)

    if (!data || !dbToken || data._id !== dbToken?.user?.toString()) {
      return res.status(401).json({
        message: 'Unauthorised'
      })
    }

    const tokens = await tokenService.generate({
      id: data._id
    })
    await tokenService.save(data._id, tokens.refreshToken)
    res.status(200).send({ ...tokens, userId: data._id })
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка'
    })
  }
})
module.exports = router

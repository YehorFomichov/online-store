const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const chalk = require('chalk')
const initDatabase = require('./startUp/initDatabase')
const PORT = config.get('port') ?? 8080
const routes = require('./routes')
const app = express()
const cors = require('cors')
const path = require('path')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api', routes)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client')))

  const indexPath = path.join(__dirname, 'client', 'index.html')

  app.get('*', (req, res) => {
    res.sendFile(indexPath)
  })
}

async function start() {
  try {
    mongoose.connection.once('open', () => {
      initDatabase()
    })
    await mongoose.connect(config.get('mongoUri'))
    console.log(chalk.blue('MongoDB connected'))
    app.listen(PORT, () => {
      console.log(chalk.green(`Server has been started on port ${PORT}`))
    })
  } catch (error) {
    console.log(chalk.red(e.message))
    process.exit(1)
  }
}

start()

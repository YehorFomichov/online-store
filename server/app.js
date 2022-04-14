const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const chalk = require('chalk')
const initDatabase = require('./startUp/initDatabase')
const PORT = config.get('port') ?? 8080
const routes = require('./routes')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', routes)
app.use(cors())

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

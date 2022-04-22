const productsMock = require('../mockData/productsMock.json')
const Product = require('../models/Product')
const chalk = require('chalk')
module.exports = async () => {
  const product = await Product.find()
  if (product.length !== productsMock.length) {
    console.log(chalk.yellow('creating products'))
    await createInitialEntity(Product, productsMock)
  }
}

async function createInitialEntity(Model, data) {
  await Model.collection.drop()
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id
        const newItem = new Model(item)
        await newItem.save()
        return newItem
      } catch (error) {
        return error
      }
    })
  )
}

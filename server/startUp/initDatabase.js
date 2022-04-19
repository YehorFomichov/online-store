const productsMock = require('../mockData/productsMock.json')
const categoryMock = require('../mockData/categoryMock.json')
const typeMock = require('../mockData/typeMock.json')
const Product = require('../models/Product')
const Type = require('../models/Type')
const chalk = require('chalk')
module.exports = async () => {
  const product = await Product.find()
  if (product.length !== productsMock.length) {
    console.log(chalk.yellow('creating products'))
    await createInitialEntity(Product, productsMock)
  }
  const type = await Type.find()
  if (type.length !== typeMock.length) {
    console.log(chalk.yellow('creating types'))
    await createInitialEntity(Type, typeMock)
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

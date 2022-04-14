const productsMock = require('../mockData/productsMock.json')
const categoryMock = require('../mockData/categoryMock.json')
const typeMock = require('../mockData/typeMock.json')
const Product = require('../models/Product')
const Category = require('../models/Category')
const Type = require('../models/Type')
const chalk = require('chalk')
module.exports = async () => {
  const product = await Product.find()
  if (product.length !== productsMock.length) {
    console.log(chalk.yellow('creating products'))
    const res = await createInitialEntity(Product, productsMock)
    console.log(res)
  }
  const category = await Category.find()
  if (category.length !== categoryMock.length) {
    console.log(chalk.yellow('creating categories'))
    await createInitialEntity(Category, categoryMock)
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

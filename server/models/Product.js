const { Schema, model } = require('mongoose')

const schema = new Schema({
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: String, required: true },
  sex: { type: String, enum: ['men', 'women'] },
  title: { type: String, required: true },
  type: { type: String, required: true }
})
module.exports = model('Product', schema)

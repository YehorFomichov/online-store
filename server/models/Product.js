const { Schema, model } = require('mongoose')

const schema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  image: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: String, required: true },
  sex: { type: String, enum: ['men', 'women'] },
  title: { type: String, required: true },
  type: { type: Schema.Types.ObjectId, ref: 'Type' }
})
module.exports = model('Product', schema)

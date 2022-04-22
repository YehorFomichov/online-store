const { Schema, model } = require('mongoose')
const orderSchema = new Schema({
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: String, required: true },
  sex: { type: String, enum: ['men', 'women'] },
  title: { type: String, required: true },
  type: { type: String, required: true },
  quantity: Number,
  size: String
})
const schema = new Schema(
  {
    orders: [orderSchema],
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
)

module.exports = model('Cart', schema)

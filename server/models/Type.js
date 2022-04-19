const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    sex: { type: String, enum: ['men', 'women'] },
    category: String
  },
  {
    timestamps: true
  }
)

module.exports = model('Type', schema)

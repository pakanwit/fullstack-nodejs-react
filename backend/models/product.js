import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    category: String,
  },
  { timestamps: true, versionKey: false }
)

const productModel = mongoose.model('Product', productSchema)

export default productModel


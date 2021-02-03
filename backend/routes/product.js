import express from 'express'
import Model from '../models/index.js'

const router = express.Router()
const Product = Model.Product

router.get('/', async (req, res) => {
  try {
    const result = await Product.find()
    res.status(200).json({
      data: result
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      massage: `Error: ${error}`
    })
  }
})

router.get('/:name', async (req, res) => {
  try {
    const { name } = req.params
    const result = await Product.find(name)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      massage: `Error: ${error}`
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body)
    await product.save()
    res.status(200).end()
  } catch (error) {
    res.status(500).json({
      status: 500,
      massage: `Error: ${error}`
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const payload = req.body
    const result = await Product.findByIdAndUpdate(id, { $set: payload })
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({
      status: 500,
      massage: `Error: ${error}`
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.status(201).end()
  } catch (error) {
    res.status(500).json({
      status: 500,
      massage: `Error: ${error}`
    })
  }
})

export default router
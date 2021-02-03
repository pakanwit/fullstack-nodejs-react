import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes/index.js'
import { config } from './config/config.js'

mongoose.connect(config.mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const app = express()
app.use(cors())
app.use(express.json())

const { product } = routes
app.use('/api/products', product)


app.get('/', (req, res) => {
  res.json({ say: 'Hellow' })
})

app.listen(3002, () => {
  console.log('Server is running on port 3002')
})

import express from 'express'
// import mongoose from 'mongoose'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ say: 'Hellow' })
})

app.listen(3002, () => {
  console.log('Server is running on port 3002')
})

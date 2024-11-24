const express = require('express')
const cors = require('cors')
const connectDB = require('./config')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api/notes', require('./route'))

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
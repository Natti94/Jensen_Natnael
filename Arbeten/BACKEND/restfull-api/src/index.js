const express = require('express')
const bodyParser = require('body-parser')
const pokemonData = require('.data/pokemonAPI.json')

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get
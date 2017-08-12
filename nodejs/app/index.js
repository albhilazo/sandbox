const express = require('express')
const dice = require('./dice')

const app = express()

app.get('/', (request, response) => {
  const sides = request.query.sides || 6

  const result = dice.roll(sides)
  response.send(`Rolled ${sides} and got: ${result}`)
})

module.exports = app

const express = require('express')
const router = express.Router()

const dice = require('../app/dice')

router.get('/', (request, response) => {
  response.send(`Available routes: /dice`)
})

router.get('/dice', (request, response) => {
  const sides = request.query.sides || 6

  const result = dice.roll(sides)
  response.send(`Rolled ${sides} and got: ${result}`)
})

module.exports = router

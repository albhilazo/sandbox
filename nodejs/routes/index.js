const express = require('express')
const router = express.Router()

const dice = require('./dice.js')

router.get('/', (request, response) => {
  response.send(`Available routes: /dice`)
})

router.get('/dice', dice)

module.exports = router

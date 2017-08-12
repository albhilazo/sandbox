const express = require('express')
const router = express.Router()

const dice = require('./dice.js')
const heroes = require('./heroes.js')

router.get('/', (request, response) => {
  response.send(`Available routes: /dice`)
})

router.get('/dice', dice)

router.get('/heroes', heroes.list)
router.post('/heroes', heroes.add)

module.exports = router

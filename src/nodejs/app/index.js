const express = require('express')
const dice = require('./dice')

const app = express()
const port = 3000

app.get('/', (request, response) => {
  const sides = 6

  const result = dice.roll(sides)
  response.send(`Rolled ${sides} and got: ${result}`)
})

app.listen(port, (err) => {
  if (err) {
    return console.log(`Error: ${err}`)
  }

  console.log(`server is listening on port ${port}`)
})

const dice = require('../app/dice')

const handler = (req, res) => {
  const sides = req.query.sides || 6

  const result = dice.roll(sides)
  res.send(`Rolled ${sides} and got: ${result}`)
}

module.exports = handler

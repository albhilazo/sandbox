function roll(sides) {
  const result = Math.floor(Math.random() * sides) + 1
  return result
}

module.exports.roll = roll

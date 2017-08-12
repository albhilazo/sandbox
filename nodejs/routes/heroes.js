const heroes = require('../app/heroes')

const list_handler = (req, res) => {
  res.send(heroes.list())
}

const add_handler = (req, res) => {
  heroes.add(req.body)
  res.status(201).end()
}

module.exports = {
  list: list_handler,
  add: add_handler,
}

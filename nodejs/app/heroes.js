const repository = require('./heroes.repository')

function list() {
  return repository.getAll()
}

function add(hero) {
  repository.insert(hero)
}

module.exports = {
  list,
  add,
}

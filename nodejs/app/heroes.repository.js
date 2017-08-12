const heroes = []

function getAll() {
  return heroes
}

function insert(hero) {
  heroes.push({
    name: hero.name
  })
}

module.exports = {
  getAll,
  insert
}

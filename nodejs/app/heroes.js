const heroes = []

function list() {
  return heroes
}

function add(hero) {
  heroes.push({
    name: hero.name
  })
}

module.exports = {
  list,
  add,
}

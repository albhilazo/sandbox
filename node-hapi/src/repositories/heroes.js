const heroes = []

const getAll = () => () => {
  return heroes
}

const register = () => (name) => {
  const newHero = { name }

  heroes.push(newHero)

  return newHero
}

module.exports = () => ({
  getAll: getAll(),
  register: register()
})

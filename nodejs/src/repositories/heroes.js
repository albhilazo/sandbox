const DuplicateHeroError = require('../errors/duplicate-hero')

const fakeHeroesDB = new Map()

module.exports = () => ({

  clear: () => {
    fakeHeroesDB.clear()
  },

  listAll: () => [...fakeHeroesDB.values()],

  register: (newHero) => {
    if(fakeHeroesDB.has(newHero.name)) {
      throw new DuplicateHeroError()
    }

    fakeHeroesDB.set(newHero.name, newHero)
  }

})

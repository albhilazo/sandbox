const fakeHeroesDB = []

module.exports = () => ({

  clear: () => {
    fakeHeroesDB.length = 0
  },

  listAll: () => [...fakeHeroesDB],

  register: (newHero) => {
    fakeHeroesDB.push(newHero)
  }

})

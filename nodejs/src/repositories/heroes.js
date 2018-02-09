const fakeHeroesDB = []

module.exports = () => ({

  listAll: () => [...fakeHeroesDB],

  register: (newHero) => {
    fakeHeroesDB.push(newHero)
  }

})

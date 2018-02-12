const fakePartiesDB = new Map()

module.exports = () => ({

  clear: () => {
    fakePartiesDB.clear()
  },

  listAll: () => [...fakePartiesDB.values()],

  create: (newParty) => {
    fakePartiesDB.set(newParty.name, newParty)
  }

})

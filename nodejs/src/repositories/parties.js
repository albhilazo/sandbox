const DuplicatePartyError = require('../errors/duplicate-party')

const fakePartiesDB = new Map()

module.exports = () => ({

  clear: () => {
    fakePartiesDB.clear()
  },

  listAll: () => [...fakePartiesDB.values()],

  create: (newParty) => {
    if(fakePartiesDB.has(newParty.name)) {
      throw new DuplicatePartyError()
    }

    fakePartiesDB.set(newParty.name, newParty)
  }

})

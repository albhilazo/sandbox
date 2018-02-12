const { expect } = require('chai')

const DungeonMaster = require('../../src/entities/dungeon-master')
const NewParty = require('../../src/dtos/new-party')
const makePartiesRepository = require('../../src/repositories/parties')
const makeCreateParty = require('../../src/use-cases/create-party')

const partiesRepository = makePartiesRepository()
const createParty = makeCreateParty(partiesRepository)

Feature(`
  As a DungeonMaster
  I want to create a new party
  So that I can identify a group of heroes
`, () => {

  Scenario(`new party created successfully`, () => {
    before(() => partiesRepository.clear())
    let user

    Given(`I am a DungeonMaster`, () => {
      user = new DungeonMaster()
    })

    When(`I create a new party named "Order of the Stick"`, () => {
      const newParty = new NewParty('Order of the Stick')
      createParty(user, newParty)
    })

    Then(`there is a party named "Order of the Stick" when listing all the parties`, () => {
      const createdParty = partiesRepository.listAll().find(party => party.name === 'Order of the Stick')
      expect(createdParty).to.not.be.undefined
    })
  })

  Scenario(`non-DungeonMaster can't create a party`, () => {
    Given(`I am a Player`)
    When(`I create a new party named "Order of the Stick"`)
    Then(`I get an "UnauthorizedAccess" error`)
    And(`there is no party named "Order of the Stick" when listing all the parties`)
  })

  Scenario(`new party already exists`, () => {
    Given(`I am a DungeonMaster`)
    And(`there is a created party named "Order of the Stick"`)
    When(`I create a new party named "Order of the Stick"`)
    Then(`I get a "DuplicateParty" error`)
    And(`There is only one party named "Order of the Stick" when listing all the parties`)
  })

})

const { expect } = require('chai')

const DungeonMaster = require('../../src/entities/dungeon-master')
const NewHero = require('../../src/dtos/new-hero')
const registerHero = require('../../src/use-cases/register-hero')

Feature(`
  As a DungeonMaster
  I want to register a new hero
  So that I can keep track of its progress
`, () => {

  Scenario(`new hero is registered successfully`, () => {
    let user

    Given(`I am a DungeonMaster user`, () => {
      user = new DungeonMaster()
    })

    When(`I register a new hero named "Roy"`, () => {
      newHero = new NewHero('Roy')

      registerHero(newHero)
    })

    Then(`I can find "Roy" when listing all the heroes`)
  })

})

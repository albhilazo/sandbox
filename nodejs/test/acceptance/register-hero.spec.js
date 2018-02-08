const { expect } = require('chai')

const registerHero = require('../../src/use-cases/register-hero')

Feature(`
  As a DungeonMaster
  I want to register a new hero
  So that I can keep track of its progress
`, () => {

  Scenario(`new hero is registered successfully`, () => {
    Given(`I am a DungeonMaster user`)
    When(`I register a new hero named "Roy"`)
    Then(`I can find "Roy" when listing all the heroes`)
  })

})

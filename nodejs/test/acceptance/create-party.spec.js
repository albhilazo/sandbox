const { expect } = require('chai')

Feature(`
  As a DungeonMaster
  I want to create a new party
  So that I can identify a group of heroes
`, () => {

  Scenario(`new party created successfully`, () => {
    Given(`I am a DungeonMaster`)
    When(`I create a new party named "Order of the Stick"`)
    Then(`there is a party named "Order of the Stick" when listing all the parties`)
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

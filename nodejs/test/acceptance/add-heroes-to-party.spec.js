const { expect } = require('chai')

Feature(`
  As a DungeonMaster
  I want to add heroes to a party
  So that they can go on adventures together
`, () => {

  Scenario(`single hero joins successfully`, () => {
    Given(`I am a DungeonMaster`)
    And(`there is a hero named "Roy"`)
    And(`a party named "Order of the Stick"`)
    When(`I add the hero to the party`)
    Then(`"Roy" is included in the list of party members`)
  })

})

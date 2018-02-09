const { expect } = require('chai')

const DungeonMaster = require('../../src/entities/dungeon-master')
const Player = require('../../src/entities/player')
const NewHero = require('../../src/dtos/new-hero')
const makeHeroesRepository = require('../../src/repositories/heroes')
const makeRegisterHero = require('../../src/use-cases/register-hero')

const heroesRepository = makeHeroesRepository()
const registerHero = makeRegisterHero(heroesRepository)

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

    Then(`I can find "Roy" when listing all the heroes`, () => {
      const registeredHero = heroesRepository.listAll().find(hero => hero.name === 'Roy')
      expect(registeredHero).to.not.be.undefined
    })
  })

  Scenario(`non-DungeonMaster can't register a hero`, () => {
    let user

    Given(`I am a Player`, () => {
      user = new Player()
    })

    When(`I register a new hero named "Roy"`)
    Then(`I get an "UnauthorizedAccess" error`)
    And(`there is no hero named "Roy" when listing all the heroes`)
  })

})

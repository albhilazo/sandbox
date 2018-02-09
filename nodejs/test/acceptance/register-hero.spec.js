const { expect } = require('chai')

const DungeonMaster = require('../../src/entities/dungeon-master')
const Player = require('../../src/entities/player')
const NewHero = require('../../src/dtos/new-hero')
const UnauthorizedAccessError = require('../../src/errors/unauthorized-access')
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
    before(() => heroesRepository.clear())
    let user

    Given(`I am a DungeonMaster user`, () => {
      user = new DungeonMaster()
    })

    When(`I register a new hero named "Roy"`, () => {
      const newHero = new NewHero('Roy')
      registerHero(user, newHero)
    })

    Then(`I can find "Roy" when listing all the heroes`, () => {
      const registeredHero = heroesRepository.listAll().find(hero => hero.name === 'Roy')
      expect(registeredHero).to.not.be.undefined
    })
  })

  Scenario(`non-DungeonMaster can't register a hero`, () => {
    before(() => heroesRepository.clear())
    let user
    let error

    Given(`I am a Player`, () => {
      user = new Player()
    })

    When(`I register a new hero named "Roy"`, () => {
      try {
        const newHero = new NewHero('Roy')
        registerHero(user, newHero)
      }
      catch(e) { error = e }
    })

    Then(`I get an "UnauthorizedAccess" error`, () => {
      expect(error).to.be.an.instanceOf(UnauthorizedAccessError)
    })

    And(`there is no hero named "Roy" when listing all the heroes`, () => {
      const registeredHero = heroesRepository.listAll().find(hero => hero.name === 'Roy')
      expect(registeredHero).to.be.undefined
    })
  })

})

const { expect } = require('chai')
const makeRegisterHero = require('../../src/services/register-hero')
const makeHeroesRepository = require('../../src/repositories/heroes')

const NEW_HERO_NAME = 'NewHero'

describe('Feature: register a new hero', () => {
  let heroesRepository
  let registerHero

  beforeEach(() => {
    heroesRepository = makeHeroesRepository()
    registerHero = makeRegisterHero(heroesRepository)
  })

  describe('Scenario: registration successful', () => {
    context('Given a name', () => {
      let name

      beforeEach(() => {
        name = NEW_HERO_NAME
      })

      context('When registering a new hero', () => {
        let newHero

        beforeEach(() => {
          newHero = registerHero(name)
        })

        it('Then a new hero should be stored', () => {
          expect(heroesRepository.getAll()).to.contain(newHero)
        })

        it('And it should have the provided name', () => {
          expect(newHero.name).to.equal(NEW_HERO_NAME)
        })
      })
    })
  })
})

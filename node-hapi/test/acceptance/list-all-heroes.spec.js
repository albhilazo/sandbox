const { expect } = require('chai')
const makeListAllHeroes = require('../../src/services/list-all-heroes')
const makeHeroesRepository = require('../../src/repositories/heroes')

describe('Feature: list all registered heroes', () => {
  let heroesRepository
  let listAllHeroes

  beforeEach(() => {
    heroesRepository = makeHeroesRepository()
    listAllHeroes = makeListAllHeroes(heroesRepository)
  })

  describe('Scenario: list successful', () => {
    context('Given two registered heroes', () => {
      beforeEach(() => {
        heroesRepository.register('NewHero1')
        heroesRepository.register('NewHero2')
      })

      context('When listing all registered heroes', () => {
        let heroesList

        beforeEach(() => {
          heroesList = listAllHeroes()
        })

        it('Then the list should contain two heroes', () => {
          expect(heroesList).to.have.lengthOf(2)
        })
      })
    })
  })
})

const DungeonMaster = require('../entities/dungeon-master')
const UnauthorizedAccessError = require('../errors/unauthorized-access')

module.exports = (heroesRepository) => (user, newHero) => {
  if(user instanceof DungeonMaster === false) {
    throw new UnauthorizedAccessError()
  }

  return heroesRepository.register(newHero)
}

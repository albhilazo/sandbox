const DungeonMaster = require('../entities/dungeon-master')
const UnauthorizedAccessError = require('../errors/unauthorized-access')

module.exports = (partiesRepository) => (user, newParty) => {
  if(user instanceof DungeonMaster === false) {
    throw new UnauthorizedAccessError()
  }

  return partiesRepository.create(newParty)
}

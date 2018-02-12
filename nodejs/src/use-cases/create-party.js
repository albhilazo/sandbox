module.exports = (partiesRepository) => (user, newParty) => {
  return partiesRepository.create(newParty)
}

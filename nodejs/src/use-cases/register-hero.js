module.exports = (heroesRepository) => (newHero) => {
  return heroesRepository.register(newHero)
}

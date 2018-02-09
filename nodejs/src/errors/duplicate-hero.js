class DuplicateHeroError extends Error {
  constructor(message) {
    super(message || 'The provided hero already exists')
  }
}

module.exports = DuplicateHeroError

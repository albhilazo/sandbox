class DuplicatePartyError extends Error {
  constructor(message) {
    super(message || 'The provided party already exists')
  }
}

module.exports = DuplicatePartyError

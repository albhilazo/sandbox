class UnauthorizedAccessError extends Error {
  constructor(message) {
    super(message || 'Unauthorized action for this user')
  }
}

module.exports = UnauthorizedAccessError

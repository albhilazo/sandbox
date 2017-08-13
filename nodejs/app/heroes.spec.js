const assert = require('assert')

const heroes = require('./heroes')

describe('Heroes', function() {
  describe('list method', function() {
    it('should return an empty array', function() {
      assert.deepEqual([], heroes.list())
    })
  })
})

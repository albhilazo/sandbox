const Trading = artifacts.require('Trading')

contract(`Trading`, (accounts) => {
  let tradingInstance

  beforeEach(async () => { tradingInstance = await Trading.deployed() })

  context(`
    Given an account
    When it sells an item
  `, () => {
    let account

    beforeEach(async () => {
      account = accounts[1]
      await tradingInstance.sellItem('item to sell', 30, { from: account })
    })

    specify(`Then the item should be registered`, async () => {
      const [itemSeller, itemName, itemPrice] = await tradingInstance.getItem()

      expect(itemSeller).to.equal(account)
      expect(itemName).to.equal('item to sell')
      expect(itemPrice.toNumber()).to.equal(30)
    })
  })
})

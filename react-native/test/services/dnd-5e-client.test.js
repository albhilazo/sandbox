import makeDnD5eClient from '../../src/services/dnd-5e-client'

describe('dnd-5e-client', () => {
  let dnd5eClient

  beforeEach(() => {
    dnd5eClient = makeDnD5eClient()
  })

  it('should fetch a list of classes', () => {
    const classesList = dnd5eClient.getClassesList()
    expect(classesList).toEqual([
      {
        "name": "Cleric",
        "url": "http://apiurl/cleric"
      },
      {
        "name": "Rogue",
        "url": "http://apiurl/rogue"
      }
    ])
  })
})

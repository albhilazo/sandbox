import axios from 'axios'
import makeDnD5eClient from '../../src/services/dnd-5e-client'

jest.mock('axios')

describe('dnd-5e-client', () => {
  const apiUrl = 'http://apiurl'
  let dnd5eClient

  beforeEach(() => {
    dnd5eClient = makeDnD5eClient({ axios, apiUrl })
  })

  it('should fetch a list of classes', async () => {
    const mockedClassesResponse = {
      "data": {
        "count": 2,
        "results": [
          { "name": "Cleric", "url": "http://apiurl/cleric" },
          { "name": "Rogue",  "url": "http://apiurl/rogue"  },
        ]
      }
    }
    axios.get.mockResolvedValue(mockedClassesResponse)

    const classesList = await dnd5eClient.getClassesList()

    const expectedClassesList = [
      { "name": "Cleric", "url": "http://apiurl/cleric" },
      { "name": "Rogue",  "url": "http://apiurl/rogue"  },
    ]
    expect(axios.get).toBeCalledWith(`${apiUrl}/classes`);
    expect(classesList).toEqual(expectedClassesList)
  })
})

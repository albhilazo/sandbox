const makeDnD5eClient = ({ axios, apiUrl }) => ({

  getClassesList: async () => {
    const response = await axios.get(`${apiUrl}/classes`)
    return response.data.results
  }

})

export default makeDnD5eClient

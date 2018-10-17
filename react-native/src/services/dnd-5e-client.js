const getClassesList = () => () => {
  return [
    {
      "name": "Cleric",
      "url": "http://apiurl/cleric"
    },
    {
      "name": "Rogue",
      "url": "http://apiurl/rogue"
    }
  ]
}

export default makeDnD5eClient = () => ({
  getClassesList: getClassesList()
})

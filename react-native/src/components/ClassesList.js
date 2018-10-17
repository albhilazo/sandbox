import React from 'react'
import { FlatList, Text } from 'react-native'

const ClassesList = (props) => {
  return (
    <FlatList
      data={props.classes}
      renderItem={({item}) => <Text>{item.name}</Text>}
      keyExtractor={item => item.name}
    />
  )
}

export default ClassesList

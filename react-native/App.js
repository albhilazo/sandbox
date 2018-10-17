import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import ClassesList from './src/components/ClassesList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text={'Title'} />
        <ClassesList
          classes={[
            { "name": "Cleric", "url": "http://apiurl/cleric" },
            { "name": "Rogue",  "url": "http://apiurl/rogue"  },
          ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    marginTop: 25,
  },
})

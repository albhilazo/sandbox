import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './src/components/Header'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text={'Title'} />
        <Text>Hai!</Text>
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

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
  }
})

export default Header

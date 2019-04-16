import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const DisplayWeather = (props) => {
  return (
      <View style={styles.container}>
        <Text style={styles.temp}>72˚</Text>
      </View>
  )
}

export default DisplayWeather

// These objects are assigned to `style` prop on each component:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold',
  }
})
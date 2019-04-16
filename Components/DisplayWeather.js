import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const DisplayWeather = (props) => {
  // No data yet, so it must still be loading
  if (props.data === null) {
    return <Text>Loading...</Text>
  }

  /* Cod is where codes go, and 200 is the success code
  So, if an error occurred, the value would not be 200 (could be 400, 404, etc.) */
  if (props.data.cod !== 200) {
    return <Text>An Error has occurred</Text>
  }

  // If no error and not loading, load/display weather data, grabbing the appropriate data from props
  const { temp, temp_max, temp_min, humidity } = props.data.main
  const { description } = props.data.weather[0]

  return (
      <View style={styles.container}>
        <Text style={styles.temp}>{temp}˚</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.temp_range}>{temp_min}˚ - {temp_max}˚</Text>
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
    textAlign: 'center',
  },
  temp_range: {
    textAlign: 'center',
    color: '#aaa',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
  }
})
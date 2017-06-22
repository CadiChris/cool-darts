import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default ({style, lanceur}) => {
  return (
      <View style={style}>
        <Text>{lanceur.nom}</Text>
      </View>
  )
}
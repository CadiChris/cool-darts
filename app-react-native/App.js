import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TableauDesScores from './cricket/tableau-des-scores/TableauDesScores'
import Lanceur from './cricket/Lanceur'

export default class App extends React.Component {
  render() {
    return (
      <View style={[styles.container, {paddingTop: 25}]}>

        <Lanceur lanceur={{nom: 'Romain'}} style={{height: '10%'}}/>

        <TableauDesScores />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  },
});
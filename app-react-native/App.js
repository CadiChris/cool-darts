import React from 'react'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { tableauDesScores } from './cricket/tableau-des-scores/TableauDesScores.reducer'
import { StyleSheet, Text, View } from 'react-native'
import TableauDesScores from './cricket/tableau-des-scores/TableauDesScores'
import Lanceur from './cricket/Lanceur'

let store = createStore(
  combineReducers({
    tableauDesScores
  })
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Lanceur lanceur={{nom: 'Romain'}} />
          <TableauDesScores />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    paddingTop: 25
  },
});

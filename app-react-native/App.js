import React from 'react'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import tableauDesScores from './cricket/tableau-des-scores/TableauDesScores.reducer'
import partie from './cricket/partie/Partie.reducer'
import { StyleSheet, Text, View } from 'react-native'
import TableauDesScores from './cricket/tableau-des-scores/TableauDesScores'
import Partie from './cricket/partie/Partie'

let store = createStore(
  combineReducers({
    partie,
    tableauDesScores
  })
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Partie style={{height:'40%'}}/>
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

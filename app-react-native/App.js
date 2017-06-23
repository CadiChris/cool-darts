import React from 'react'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import { tableauDesScoresReducer } from './cricket/tableau-des-scores/TableauDesScores.reducer'
import { StyleSheet, Text, View } from 'react-native'
import TableauDesScores from './cricket/tableau-des-scores/TableauDesScores'
import Lanceur from './cricket/Lanceur'

let store = createStore(
  tableauDesScoresReducer
)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={[styles.container, {paddingTop: 25}]}>
          <Lanceur lanceur={{nom: 'Romain'}} style={{height: '10%'}}/>
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
  },
});

export default connect()(App)
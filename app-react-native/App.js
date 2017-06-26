import React from 'react'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import tableauDesScores from './Cricket/TableauDesScores/TableauDesScores.reducer'
import partie from './Cricket/Partie/Partie.reducer'
import Cricket from './Cricket/Cricket'

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
        <Cricket />
      </Provider>
    );
  }
}

import React from 'react'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import tableauDesScores from './Cricket/TableauDesScores/TableauDesScores.reducer'
import cricket from './Cricket/Cricket.reducer'
import Cricket from './Cricket/Cricket'

let store = createStore(
  combineReducers({
    cricket,
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

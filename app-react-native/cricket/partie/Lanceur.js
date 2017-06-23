import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { lancerFlechette } from '../tableau-des-scores/TableauDesScores.actions'

class Lanceur extends React.Component {

  constructor(props) {
    super(props)
  }

  lancer() {
    const {dispatch} = this.props
    dispatch(lancerFlechette('J1', 15, 2))
  }

  render() {
    const {style, lanceur} = this.props

    return (
      <View style={style}>
        <Text>{lanceur.nom}</Text>
        <Button title="Lancer" onPress={() => this.lancer()}/>
      </View>
    )
  }
}

export default connect()(Lanceur)
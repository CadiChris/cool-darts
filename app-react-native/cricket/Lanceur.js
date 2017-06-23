import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { ajouterJoueur } from './tableau-des-scores/TableauDesScores.actions'

class Lanceur extends React.Component {

  constructor(props) {
    super(props)
  }

  ajouterJoueur() {
    const {dispatch} = this.props
    dispatch(ajouterJoueur('Joueur'))

  }
  render() {
    const {style, lanceur} = this.props

    return (
      <View style={style}>
        <Text>{lanceur.nom}</Text>
        <Button title="Nouveau joueur" onPress={() => this.ajouterJoueur()}/>
      </View>
    )
  }
}

export default connect()(Lanceur)
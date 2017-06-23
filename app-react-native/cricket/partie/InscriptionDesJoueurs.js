import React from 'react'
import { connect } from 'react-redux'
import { View, Button } from 'react-native'
import { inscrireJoueur } from './Partie.actions'

class InscriptionDesJoueurs extends React.Component {
  constructor(props) {
    super(props)
  }

  ajouterJoueur() {
    const {dispatch} = this.props
    dispatch(inscrireJoueur('J1'))
  }

  render() {
    return (
      <View>
        <Button title="Nouveau joueur" onPress={() => this.ajouterJoueur()}/>
      </View>
    )
  }
}

export default connect()(InscriptionDesJoueurs)
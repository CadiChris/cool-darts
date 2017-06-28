import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import Button from 'apsl-react-native-button'
import { Boutons, Textes, Styles } from '../styles'
import { nouvellePartie } from './../Cricket.actions'

class CommandesDeLaPartie extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}]}>
        <Button
          onPress={() => this.nouvellePartie()}
          style={[Boutons.deCommande, {width: 60}]}
          textStyle={[Textes.bouton, {fontSize: 12}]}>
          Accueil
        </Button>
      </View>
    )
  }

  nouvellePartie() {
    const {dispatch} = this.props
    dispatch(nouvellePartie())
  }
}

export default connect()(CommandesDeLaPartie)
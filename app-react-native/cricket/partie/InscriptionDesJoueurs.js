import React from 'react'
import { connect } from 'react-redux'
import { View, Button, TextInput } from 'react-native'
import { inscrireJoueur, demarrerPartie } from './Partie.actions'

class InscriptionDesJoueurs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      joueur: ''
    }
  }

  render() {
    const {peutDemarrer} = this.props
    const {joueur} = this.state
    return (
      <View style={{height: 100}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TextInput
            value={joueur}
            onChangeText={(text) => this.setState({joueur: text})}
            style={{height: 40, width: 100}}
            placeholder="Joueur"/>
          <Button title="Nouveau joueur" onPress={() => this.ajouterJoueur()}/>
        </View>
        {
          peutDemarrer ? <Button title="GO" onPress={() => this.demarrerLaPartie()}/> : null
        }
      </View>
    )
  }

  ajouterJoueur() {
    const {dispatch} = this.props
    const {joueur}=this.state
    dispatch(inscrireJoueur(joueur))
    this.setState({joueur: ''})
  }

  demarrerLaPartie() {
    const {dispatch} = this.props
    dispatch(demarrerPartie())
  }
}

function mapStateToProps(state) {
  return {
    peutDemarrer: state.partie.peutDemarrer
  }
}

export default connect(mapStateToProps)(InscriptionDesJoueurs)
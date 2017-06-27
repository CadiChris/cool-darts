import React from 'react'
import { connect } from 'react-redux'
import { View, Button, TextInput, Text } from 'react-native'
import { inscrireJoueur, demarrerPartie } from '../Cricket.actions'
import { Styles, Textes } from '../styles'

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
        <View style={[{flex: 1}, Styles.contenuAuMilieu]}>

          <Text style={Textes.titre}>Nouvelle partie</Text>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={joueur}
              onChangeText={(text) => this.setState({joueur: text})}
              style={{height: 40, width: 100}}
              placeholder="Joueur"/>
            <Button title="Inscrire" onPress={() => this.inscrireJoueur()} style={Textes.bouton}/>
          </View>

          <Button title="GO" onPress={() => this.demarrerLaPartie()} disabled={!peutDemarrer} style={{alignSelf:'flex-end'}}/>
      </View>
    )
  }

  inscrireJoueur() {
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

const mapStateToProps = (state) => ({
    peutDemarrer: state.cricket.peutDemarrer
  }
)

export default connect(mapStateToProps)(InscriptionDesJoueurs)
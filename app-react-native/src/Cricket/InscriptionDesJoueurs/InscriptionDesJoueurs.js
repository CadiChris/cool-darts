import React from 'react'
import { connect } from 'react-redux'
import { View, TextInput, Text } from 'react-native'
import Button from 'apsl-react-native-button'
import { inscrireJoueur, demarrerPartie } from '../Cricket.actions'
import { Styles, Textes, Boutons } from '../styles'

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
      <View style={[Styles.contenuAuMilieu, {paddingHorizontal: 10, justifyContent: 'space-around'},]}>

        <Text style={Textes.titre}>Nouvelle partie</Text>

        <View style={{flexDirection: 'row', paddingHorizontal: 50}}>
          <TextInput
            value={joueur}
            onChangeText={(text) => this.setState({joueur: text})}
            style={[{flex: 2, color: 'white', borderBottomWidth: 1, borderBottomColor: 'red'}, Textes.basique]}
            placeholderTextColor='#FFF'
            placeholder="   Joueur..."/>

          <Button
            onPress={() => this.inscrireJoueur()}
            style={[{flex: 1}, Boutons.secondaire]}
            textStyle={Textes.basique}>
            Inscrire
          </Button>
        </View>

        <Button onPress={() => this.demarrerLaPartie()} isDisabled={!peutDemarrer}
                style={[Boutons.principal, {marginBottom: 0}]} textStyle={Textes.basique}>
          Démarrer
        </Button>
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
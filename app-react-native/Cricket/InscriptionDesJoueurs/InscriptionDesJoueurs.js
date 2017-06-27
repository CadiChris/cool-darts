import React from 'react'
import { connect } from 'react-redux'
import { View, Button, TextInput } from 'react-native'
import { inscrireJoueur, demarrerPartie } from '../Cricket.actions'
import { Styles } from './../styles'

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
        <View style={[{flex: 1, flexDirection:'row'}, Styles.contenuAuMilieu]}>
          <View style={{borderWidth: 1, borderRadius: 20, paddingHorizontal: 10}}>
            <TextInput
              value={joueur}
              onChangeText={(text) => this.setState({joueur: text})}
              style={{height: 40, width: 100}}
              placeholder="Joueur"/>
          </View>
          <Button title="Inscrire" onPress={() => this.inscrireJoueur()}/>
          <Button title="GO" onPress={() => this.demarrerLaPartie()} disabled={!peutDemarrer}/>
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
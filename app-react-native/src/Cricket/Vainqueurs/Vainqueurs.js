import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { Styles, Textes, Boutons } from '../styles'
import Button from 'apsl-react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import { nouvellePartie } from '../Cricket.actions'

class Vainqueurs extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {vainqueurs} = this.props
    return (
      <View style={[Styles.contenuAuMilieu, {justifyContent: 'space-around'}]}>
        <Text style={[Textes.titre, {}]}>Fin de partie</Text>
        <View style={{height: '70%', justifyContent: 'space-around'}}>
          <View>
            <Text style={[Textes.light, {fontSize: 18, opacity: 0.8, textAlign: 'center'}]}>Vainqueur</Text>
            <Text style={[Textes.titre, {textAlign: 'center'}]}> {vainqueurs.map(v => v)}</Text>
          </View>
          <Button
            onPress={() => this.nouvellePartie()}
            style={[Boutons.deCommande, {width: 60, height: 50, marginHorizontal: 30}]}
            textStyle={[Textes.bouton, {fontSize: 12}]}>
            <Icon name="home" size={20} color="white"/>
          </Button>
        </View>
      </View>
    )
  }

  nouvellePartie() {
    const {dispatch} = this.props
    dispatch(nouvellePartie())
  }
}

function mapStateToProps(state) {
  return {
    vainqueurs: state.cricket.actuel.vainqueurs
  }
}

export default connect(mapStateToProps)(Vainqueurs)
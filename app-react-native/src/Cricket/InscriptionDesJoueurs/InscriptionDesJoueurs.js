import React from 'react'
import { connect } from 'react-redux'
import { View, TextInput, Text } from 'react-native'
import FadeInView from '../Technique/FadeInView'
import ViewQuiDecale from './../Technique/ViewQuiDecale'
import TexteApparaissant from './../Technique/TexteApparaissant'
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
    const {peutDemarrer, joueurs} = this.props
    const {joueur} = this.state
    return (
      <FadeInView
        style={[Styles.contenuAuMilieu, {paddingHorizontal: 10, justifyContent: 'space-between'},]}
        dureeDuFade={450}>

        <Text style={[Textes.titre, {marginTop: 50}]}>Nouvelle partie</Text>

        <ViewQuiDecale dureeDuDecalage={230} coteDeDepart="right" style={[{flex: 1, flexDirection: 'row', paddingHorizontal: 50,}]}>
          <TextInput
            value={joueur}
            onChangeText={(text) => this.setState({joueur: text})}
            style={[{flexGrow: 1, color: 'white', borderBottomWidth: 1, borderBottomColor: 'red'}, Textes.light]}
            placeholderTextColor='#FFF'
            placeholder="Joueur..."/>

          <Button
            onPress={() => this.inscrireJoueur()}
            style={[{width: 80, alignSelf: 'center'}, Boutons.secondaire]}
            textStyle={Textes.bouton}>
            Inscrire
          </Button>
        </ViewQuiDecale>

        <View style={{flex: 1}}>
          {joueurs.map((nom, index) =>
            <TexteApparaissant key={index} style={[Textes.basique, Textes.mav, {textAlign: 'center'}]}>
              <Text style={[Textes.light, {opacity: 0.5}]}>#{index + 1} - </Text>{nom}
            </TexteApparaissant>
          )}
        </View>

        <Button
          onPress={() => this.demarrerLaPartie()}
          isDisabled={!peutDemarrer}
          style={[Boutons.principal, {marginBottom: 10, marginHorizontal: 10}]}
          textStyle={Textes.bouton}>
          Démarrer
        </Button>
      </FadeInView>
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
    peutDemarrer: state.cricket.actuel.peutDemarrer,
    joueurs: state.cricket.actuel.joueurs
  }
)

export default connect(mapStateToProps)(InscriptionDesJoueurs)
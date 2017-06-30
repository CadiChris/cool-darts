import React from 'react'
import { View, TextInput, Text, Platform } from 'react-native'
import FadeInView from '../Technique/FadeInView'
import ViewQuiDecale from './../Technique/ViewQuiDecale'
import TexteApparaissant from './../Technique/TexteApparaissant'
import Button from 'apsl-react-native-button'
import { Styles, Textes, Boutons } from '../styles'

const unPeuTransparent = Platform.select({
  ios: {opacity: .5},
  android: {color: '#8498AB'}
})

export default ({laPartiePeutDemarrer, joueurs, joueur, declencherInscrireJoueur, declencherDemarrerLaPartie, nommerLeJoueur}) => (
  <FadeInView
    style={[Styles.contenuAuMilieu, {paddingHorizontal: 10, justifyContent: 'space-between'},]}
    dureeDuFade={450}>

    <Text style={[Textes.titre, {marginTop: 50}]}>Nouvelle partie</Text>

    <ViewQuiDecale dureeDuDecalage={230} coteDeDepart="right"
                   style={[{flex: 1, flexDirection: 'row', paddingHorizontal: 50,}]}>
      <TextInput
        value={joueur}
        onChangeText={(text) => nommerLeJoueur(text)}
        style={[{flexGrow: 1, color: 'white'}, Textes.light]}
        underlineColorAndroid='transparent'
        placeholderTextColor='#FFF'
        placeholder="Joueur..."/>

      <Button
        onPress={declencherInscrireJoueur}
        style={[{width: 80, alignSelf: 'center'}, Boutons.secondaire]}
        textStyle={Textes.bouton}>
        Inscrire
      </Button>
    </ViewQuiDecale>

    <View style={{flex: 1}}>
      {joueurs.map((nom, index) =>
        <TexteApparaissant key={index} style={[Textes.basique, Textes.mav, {textAlign: 'center'}]}>
          <Text style={[Textes.light, {...unPeuTransparent}]}>#{index + 1}</Text>  {nom}
        </TexteApparaissant>
      )}
    </View>

    <Button
      onPress={declencherDemarrerLaPartie}
      isDisabled={!laPartiePeutDemarrer}
      style={[Boutons.principal, {marginBottom: 10, marginHorizontal: 10}]}
      textStyle={Textes.bouton}>
      Démarrer
    </Button>
  </FadeInView>
)
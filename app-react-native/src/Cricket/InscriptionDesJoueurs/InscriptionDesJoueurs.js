import React from 'react'
import { View, TextInput, Text, Platform } from 'react-native'
import LocalizedStrings from 'react-native-localization'
import Portrait from '../Technique/Portrait'
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
  <Portrait>
    <FadeInView
      style={[Styles.contenuAuMilieu, {paddingHorizontal: 10, justifyContent: 'space-between'},]}
      dureeDuFade={450}>

      <Text style={[Textes.titre, {marginTop: 50}]}>Cut-Throat Cricket</Text>

      <ViewQuiDecale dureeDuDecalage={230} coteDeDepart="right"
                     style={[{flex: 1, flexDirection: 'row', paddingHorizontal: 50,}]}>
        <TextInput
          value={joueur}
          onChangeText={(text) => nommerLeJoueur(text)}
          style={[{flexGrow: 1, color: 'white'}, Textes.light]}
          underlineColorAndroid='transparent'
          placeholderTextColor='#FFF'
          placeholder={textes.joueur} />

        <Button
          onPress={declencherInscrireJoueur}
          style={[{width: 80, alignSelf: 'center'}, Boutons.secondaire]}
          textStyle={Textes.bouton}>
          {textes.inscrire}
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
        {textes.demarrer}
      </Button>
    </FadeInView>
  </Portrait>
)

const textes = new LocalizedStrings({
  en:{
    joueur: "Player...",
    inscrire: "Add",
    demarrer: "Play",
  },
  fr: {
    joueur: "Joueur...",
    inscrire: "Inscrire",
    demarrer: "Démarrer",
  }
})
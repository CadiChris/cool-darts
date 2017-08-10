import React from 'react'
import { Text, View } from 'react-native'
import { Styles, Textes, Boutons } from '../styles'
import ViewQuiDecale from '../Technique/ViewQuiDecale'
import Button from 'apsl-react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'

export default ({vainqueurs, declencherNouvellePartie}) => (
  <View style={[Styles.contenuAuMilieu, {justifyContent: 'space-around'}]}>

    <ViewQuiDecale dureeDuDecalage={1200} coteDeDepart="right">
      <Text style={[Textes.titre, {}]}>
        Fin de partie
      </Text>
    </ViewQuiDecale>

    <ViewQuiDecale dureeDuDecalage={1200} coteDeDepart="left" style={[{height: '70%', justifyContent: 'space-around'}]}>
      <View>
        <Text style={[Textes.light, {fontSize: 18, opacity: 0.8, textAlign: 'center'}]}>Vainqueur</Text>
        <Text style={[Textes.titre, {textAlign: 'center'}]}> {vainqueurs.map(v => v)}</Text>
      </View>

      <Button
        onPress={declencherNouvellePartie}
        style={[Boutons.deCommande, {width: 60, height: 50, alignSelf: 'center'}]}
        textStyle={[Textes.bouton, {fontSize: 12}]}>
        <Icon name="home" size={20} color="white"/>
      </Button>
    </ViewQuiDecale>

  </View>
)
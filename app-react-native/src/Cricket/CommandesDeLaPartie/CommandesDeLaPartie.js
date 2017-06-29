import React from 'react'
import { Text, View }  from 'react-native'
import Button from 'apsl-react-native-button'
import { Boutons, Textes } from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default ({aucunPrecedent : undoImpossible, declencherNouvellePartie, declencherUndo}) => (

  <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}]}>
    <Button
      onPress={declencherNouvellePartie}
      style={[Boutons.deCommande, {width: 60, height: 50, marginHorizontal: 30}]}
      textStyle={[Textes.bouton, {fontSize: 12}]}>
      <Icon name="home" size={20} color="white"/>
    </Button>
    <Button
      onPress={declencherUndo}
      isDisabled={undoImpossible}
      style={[Boutons.deCommande, {width: 60, height: 50, marginHorizontal: 30}]}
      textStyle={[Textes.bouton, {fontSize: 12}]}>
      <Icon name="undo" size={20} color="white"/>
    </Button>
  </View>

)
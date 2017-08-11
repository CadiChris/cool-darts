import React from 'react'
import { Text, View }  from 'react-native'
import Button from 'apsl-react-native-button'
import { Boutons, Textes } from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import BoutonAvecConfirmation from '../Technique/BoutonAvecConfirmation'

export default ({aucunPrecedent : undoImpossible, declencherNouvellePartie, declencherUndo}) => (

  <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}]}>

    <BoutonAvecConfirmation
        titre="Quitter la partie"
        message="Êtes-vous sûr de vouloir quitter la partie ?"
        apresConfirmation={declencherNouvellePartie}
        style={[Boutons.deCommande, {width: 60, height: 50, marginHorizontal: 30}]}
        textStyle={[Textes.bouton, {fontSize: 12}]}>
      <Icon name="home" size={20} color="white"/>
    </BoutonAvecConfirmation>

    <Button
      onPress={declencherUndo}
      isDisabled={undoImpossible}
      style={[Boutons.deCommande, {width: 60, height: 50, marginHorizontal: 30}]}
      textStyle={[Textes.bouton, {fontSize: 12}]}>
      <Icon name="undo" size={20} color="white"/>
    </Button>
  </View>

)
import React from 'react';
import {Text, View} from 'react-native';
import {FontSizes, Textes} from '../../../styles';
import {HAUTEUR_DE_LIGNE, LARGEUR_COLONNE_DES_CHIFFRES} from './dimensions';

export const ColonneDesChiffres = (
  <View style={[{width: LARGEUR_COLONNE_DES_CHIFFRES, marginTop: 40}]}>
    {[20, 19, 18, 17, 16, 15, 'Bull'].map(chiffre => (
      <View
        key={chiffre}
        style={[{height: HAUTEUR_DE_LIGNE, justifyContent: 'center'}]}>
        <Text
          style={[
            Textes.light,
            {textAlign: 'center', fontSize: FontSizes.standard},
          ]}>
          {chiffre}
        </Text>
      </View>
    ))}
  </View>
);

import {Text, View} from 'react-native';
import {FontSizes, Textes} from '../../../styles';
import PropTypes from 'prop-types';
import React from 'react';

export const Joueur = ({nom}) => (
  <View style={{flex: 1, justifyContent: 'center'}}>
    <Text
      numberOfLines={1}
      style={[
        Textes.titre,
        {
          fontSize: FontSizes.standard,
          textAlign: 'center',
          paddingHorizontal: 10,
        },
      ]}>
      {nom}
    </Text>
  </View>
);

Joueur.propTypes = {nom: PropTypes.string};

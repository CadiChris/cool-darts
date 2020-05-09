import React from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {FontSizes, Textes} from '../../../styles';

export default ({symbole, nombre}) => {
  let croix = [];

  for (let i = 0; i < nombre; i++) {
    croix.push(
      <Animatable.Text
        key={i}
        animation="bounceIn"
        easing="ease-out-back"
        duration={1300}
        style={[
          Textes.basique,
          {
            fontSize: FontSizes.standard,
            textAlign: 'center',
            letterSpacing: 3,
          },
        ]}>
        {symbole}
      </Animatable.Text>,
    );
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {croix}
    </View>
  );
};

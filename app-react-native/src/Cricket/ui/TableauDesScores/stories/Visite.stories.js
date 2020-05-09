import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {array, withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import Visite from '../Visite';

storiesOf('Cricket', module)
  .addDecorator(withKnobs)
  .add('Visite', () => (
    <View style={{backgroundColor: 'grey'}}>
      <Visite
        joueur="Ross"
        chiffres={array('chiffres', [17, 17, 25, 20])}
        onValider={action('valider')}
        onAnnuler={action('annuler')}
      />
    </View>
  ));

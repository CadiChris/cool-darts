import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { array, boolean, object, withKnobs } from '@storybook/addon-knobs';
import cricket from '../../../domaine/reducer';
import TableauDesScores from '../TableauDesScores';
import { demarrerCricket, visiter } from '../../../domaine/actions';
import { Styles } from '../../../../styles';

const partieDeTest = [
  demarrerCricket(['Noémie', 'Christophe']),
  visiter('Noémie', [17,17,17]),
  visiter('Noémie', [20]),
  visiter('Noémie', [17, 17]),
  visiter('Christophe', [15, 15]),
].reduce(cricket, undefined);

storiesOf('Cricket', module)
  .addDecorator(story => <View style={Styles.container}>{story()}</View>)
  .addDecorator(withKnobs)
  .add('Tableau des scores', () => (
    <TableauDesScores
      actif={boolean('Actif', true)}
      vainqueurs={array('Vainqueurs', [])}
      scores={object('Scores', partieDeTest.scores)}
      onVisite={action('Lancer')}
    />
  ));

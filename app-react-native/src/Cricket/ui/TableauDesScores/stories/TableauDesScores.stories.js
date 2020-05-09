import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {array, boolean, object, withKnobs} from '@storybook/addon-knobs';
import cricket from '../../../domaine/reducer';
import TableauDesScores from '../TableauDesScores';
import {demarrerCricket, lancerFlechette} from '../../../domaine/actions';
import {Styles} from '../../../../styles';

const partieDeTest = [
  demarrerCricket(['Noémie', 'Christophe']),
  lancerFlechette('Noémie', 17, 3),
  lancerFlechette('Noémie', 20, 1),
  lancerFlechette('Noémie', 17, 2),
  lancerFlechette('Christophe', 15, 2),
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

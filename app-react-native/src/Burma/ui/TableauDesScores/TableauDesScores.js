import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import {verticalScale} from 'react-native-size-matters';
import {ColonneDesContrats} from './ColonneDesContrats';
import ColonneJoueur from './ColonneJoueur';

const HAUTEUR_DE_CONTRAT = verticalScale(45);

const TableauDesScores = ({scores, lanceur, chiffreCourant}) => (
  <Animatable.View style={{flexDirection: 'row'}} animation="bounceInRight">
    <ColonneDesContrats />

    <View style={{flex: 1, flexDirection: 'row'}}>
      {Object.keys(scores)
        .map(joueur => ({joueur, score: scores[joueur]}))
        .map(({joueur, score}) => (
          <ColonneJoueur
            key={joueur}
            joueur={joueur}
            score={score}
            largeur={`${100 / Object.keys(scores).length}%`}
            estLeLanceur={joueur === lanceur}
            chiffreCourant={chiffreCourant}
          />
        ))}
    </View>
  </Animatable.View>
);

TableauDesScores.propTypes = {
  scores: PropTypes.object.isRequired,
  lanceur: PropTypes.string,
  chiffreCourant: PropTypes.string,
};

export default TableauDesScores;
export {HAUTEUR_DE_CONTRAT};

import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableHighlight, View} from 'react-native';
import {HAUTEUR_DE_LIGNE} from './dimensions';
import Joueur from './Joueur';
import {FontSizes, Styles, Textes} from '../../../styles';
import Touches from './Touches';
import AnimatedNumber from '../../../Kit/AnimatedNumber';

export const ColonneJoueur = function({
  score,
  style,
  actif,
  onLancerDansSimple,
}) {
  return (
    <View style={style}>
      <View style={{height: HAUTEUR_DE_LIGNE}}>
        <Joueur nom={score.joueur} />
      </View>
      {[20, 19, 18, 17, 16, 15, 25].map(chiffre => (
        <TouchableHighlight
          key={chiffre}
          disabled={!actif}
          onPress={() => onLancerDansSimple(score.joueur, chiffre)}>
          <View
            style={[
              {height: HAUTEUR_DE_LIGNE, justifyContent: 'center'},
              Styles.bordureBasse,
              score.cible[chiffre].ferme && Styles.chiffreFerme,
            ]}>
            <View>
              <Touches symbole="X" nombre={score.cible[chiffre].touches} />
            </View>
          </View>
        </TouchableHighlight>
      ))}
      <View
        style={[
          Styles.bordureHaute,
          {
            height: HAUTEUR_DE_LIGNE,
            borderTopWidth: 3,
            justifyContent: 'center',
          },
        ]}>
        <AnimatedNumber
          value={score.penalite}
          renderValue={value => (
            <Text
              style={[
                Textes.titre,
                {fontSize: FontSizes.standard, textAlign: 'center'},
              ]}>
              {Math.round(value)}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

ColonneJoueur.propTypes = {
  score: PropTypes.object.isRequired,
  style: PropTypes.array.isRequired,
  actif: PropTypes.bool.isRequired,
  onLancerDansSimple: PropTypes.func.isRequired,
};

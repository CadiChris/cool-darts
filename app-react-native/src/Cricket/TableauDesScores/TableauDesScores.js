import React from "react";
import PropTypes from "prop-types";
import * as Animatable from "react-native-animatable";
import { Text, TouchableHighlight, View } from "react-native";
import Celebration from "../../Technique/Celebration";
import { FontSizes, Styles, Textes } from "../../styles";
import Joueur from "./Joueur";
import Touches from "./Touches";
import AnimatedNumber from "../../Technique/AnimatedNumber";
import Vainqueurs from "./Vainqueurs";
import { splitArray } from "../../utils/splitArray";
import { ColonneDesChiffres } from "./ColonneDesChiffres";
import { HAUTEUR_DE_LIGNE, LARGEUR_COLONNE_JOUEUR } from "./dimensions";

const TableauDesScores = ({
  scores,
  onLancerDansSimple,
  vainqueurs,
  actif
}) => (
  <Animatable.View style={[{ flex: 1 }]} animation="bounceInRight">
    {vainqueurs.length > 0 && <Celebration />}
    <View style={{ flexDirection: "row" }}>
      {splitArray(scores).premier.map(score =>
        colonneJoueur(
          score,
          [
            {
              width: LARGEUR_COLONNE_JOUEUR(scores.length)
            },
            Styles.bordureDroite
          ],
          actif,
          onLancerDansSimple
        )
      )}

      {ColonneDesChiffres}

      {splitArray(scores).second.map(score =>
        colonneJoueur(
          score,
          [
            {
              width: LARGEUR_COLONNE_JOUEUR(scores.length)
            },
            Styles.bordureGauche
          ],
          actif,
          onLancerDansSimple
        )
      )}
    </View>

    {vainqueurs.length > 0 && <Vainqueurs noms={vainqueurs} />}
  </Animatable.View>
);

const colonneJoueur = function(score, style, actif, onLancerDansSimple) {
  return (
    <View key={score.joueur} style={style}>
      <View style={{ height: HAUTEUR_DE_LIGNE }}>
        <Joueur nom={score.joueur} />
      </View>
      {[20, 19, 18, 17, 16, 15, 25].map(chiffre => (
        <TouchableHighlight
          key={chiffre}
          disabled={!actif}
          onPress={() => onLancerDansSimple(score.joueur, chiffre)}
        >
          <View
            style={[
              { height: HAUTEUR_DE_LIGNE, justifyContent: "center" },
              Styles.bordureBasse,
              score.cible[chiffre].ferme && Styles.chiffreFerme
            ]}
          >
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
            justifyContent: "center"
          }
        ]}
      >
        <AnimatedNumber value={score.penalite}>
          {value => (
            <Text
              style={[
                Textes.titre,
                { fontSize: FontSizes.standard, textAlign: "center" }
              ]}
            >
              {Math.round(value)}
            </Text>
          )}
        </AnimatedNumber>
      </View>
    </View>
  );
};

TableauDesScores.propTypes = {
  scores: PropTypes.array.isRequired,
  onLancerDansSimple: PropTypes.func.isRequired,
  vainqueurs: PropTypes.array.isRequired,
  actif: PropTypes.bool.isRequired
};

export default TableauDesScores;

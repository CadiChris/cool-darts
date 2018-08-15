import React from "react";
import PropTypes from "prop-types";
import * as Animatable from "react-native-animatable";
import { Text, TouchableHighlight, View } from "react-native";
import Celebration from "../../Technique/Celebration";
import { Styles, Textes } from "../../styles";
import Joueur from "./Joueur";
import Touches from "./Touches";
import AnimatedNumber from "../../Technique/AnimatedNumber";
import Vainqueurs from "./Vainqueurs";

const HAUTEUR_DE_LIGNE = 40;

const TableauDesScores = ({
  scores,
  onLancerDansSimple,
  vainqueurs,
  actif
}) => (
  <Animatable.View style={[{ flex: 1 }]} animation="bounceInRight">
    {vainqueurs.length > 0 && <Celebration />}
    <View style={{ flexDirection: "row" }}>
      <View style={{ width: 56, marginTop: 40, paddingLeft: 5 }}>
        {[15, 16, 17, 18, 19, 20, "Bull"].map(chiffre => (
          <View key={chiffre} style={[{ height: HAUTEUR_DE_LIGNE }]}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={[Textes.light, { fontSize: 18 }]}>{chiffre}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        {scores.map(score => (
          <View key={score.joueur} style={{ width: `${100 / scores.length}%` }}>
            <View style={{ height: HAUTEUR_DE_LIGNE }}>
              <Joueur penalite={2} joueur={score.joueur} estVainqueur={false} />
            </View>
            {Object.keys(score.cible).map(chiffre => (
              <TouchableHighlight
                key={chiffre}
                disabled={!actif}
                onPress={() => onLancerDansSimple(score.joueur, chiffre)}
              >
                <View
                  style={[
                    { height: HAUTEUR_DE_LIGNE, justifyContent: "center" },
                    Styles.bordureBasse,
                    Styles.bordureGauche,
                    score.cible[chiffre].ferme && Styles.chiffreFerme
                  ]}
                >
                  <View>
                    <Touches
                      symbole="X"
                      nombre={score.cible[chiffre].touches}
                    />
                  </View>
                </View>
              </TouchableHighlight>
            ))}
            <View
              style={[
                Styles.bordureHaute,
                Styles.bordureGauche,
                Styles.bordureBasse,
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
                      { fontSize: 19, textAlign: "center" }
                    ]}
                  >
                    {Math.round(value)}
                  </Text>
                )}
              </AnimatedNumber>
            </View>
          </View>
        ))}
      </View>
    </View>

    {vainqueurs.length > 0 && <Vainqueurs noms={vainqueurs} />}
  </Animatable.View>
);

TableauDesScores.propTypes = {
  scores: PropTypes.array.isRequired,
  onLancerDansSimple: PropTypes.func.isRequired,
  vainqueurs: PropTypes.array.isRequired,
  actif: PropTypes.bool.isRequired
};

export default TableauDesScores;

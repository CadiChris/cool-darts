import { Text, View } from "react-native";
import { Styles, Textes } from "../../styles";
import { Joueur } from "./Joueur";
import PropTypes from "prop-types";
import React from "react";
import { HAUTEUR_DU_CONTRAT_DE_DEPART } from "./TableauDesScores";
import { UnContrat } from "./UnContrat";

export const ColonneJoueur = ({ largeur, joueur, score }) => (
  <View style={{ width: largeur }}>
    <View style={[{ height: 40 }, Styles.bordureBasse, Styles.bordureGauche]}>
      <Joueur nom={joueur} />
    </View>
    <View
      style={[
        Styles.bordureBasse,
        Styles.bordureGauche,
        { height: HAUTEUR_DU_CONTRAT_DE_DEPART }
      ]}
    >
      <View style={{ flex: 1, justifyContent: "center", paddingRight: 6 }}>
        <Text style={[Textes.basique, { fontSize: 19, alignSelf: "flex-end" }]}>
          {score[0].points}
        </Text>
      </View>
    </View>

    {score
      .slice(1)
      .map((contrat, index) => (
        <UnContrat
          key={contrat}
          points={contrat.points}
          pointsPrecedents={
            index == 0 ? score[0].points : score[index - 1].points
          }
        />
      ))}
  </View>
);

ColonneJoueur.propTypes = {
  joueur: PropTypes.string.isRequired,
  largeur: PropTypes.string.isRequired
};

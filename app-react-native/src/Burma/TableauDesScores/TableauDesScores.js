import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { ColonneDesContrats } from "./ColonneDesContrats";
import { ColonneJoueur } from "./ColonneJoueur";

const HAUTEUR_DU_CONTRAT_DE_DEPART = 30;

const TableauDesScores = ({ scores }) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, flexDirection: "row" }}>
      <ColonneDesContrats />

      <View style={{ flex: 1, flexDirection: "row" }}>
        {Object.keys(scores)
          .map(joueur => ({ joueur, score: scores[joueur] }))
          .map(({ joueur, score }) => (
            <ColonneJoueur
              key={joueur}
              joueur={joueur}
              score={score}
              largeur={`${100 / Object.keys(scores).length}%`}
            />
          ))}
      </View>
    </View>
  </View>
);

TableauDesScores.propTypes = {
  scores: PropTypes.object.isRequired
};

export default TableauDesScores;
export { HAUTEUR_DU_CONTRAT_DE_DEPART };

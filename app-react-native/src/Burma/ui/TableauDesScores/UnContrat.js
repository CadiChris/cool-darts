import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";
import { FontSizes, Textes } from "../../../styles";
import TexteApparaissant from "../../../Kit/TexteApparaissant";
import { scale, verticalScale } from "react-native-size-matters";

export const UnContrat = ({ delta, touches, contrat }) => (
  <View style={{ flex: 1, justifyContent: "space-between" }}>
    <View
      style={{
        justifyContent: "center",
        height: FontSizes.mini + verticalScale(6)
      }}
    >
      {touches.length > 0 && (
        <TexteApparaissant style={[Textes.light, styleDesTouches]}>
          {concerneUnChiffre(contrat) && `x${touches.length}`}
          {concerneDoubleOuTriple(contrat) && touches.join("   ")}
        </TexteApparaissant>
      )}
    </View>

    <View style={styleDeContrat.conteneur}>
      {delta > 0 && (
        <TexteApparaissant style={[Textes.light, styleDeContrat.rempli]}>
          +{delta}
        </TexteApparaissant>
      )}
      {delta <= 0 && (
        <TexteApparaissant style={[Textes.light, styleDeContrat.manque]}>
          / 2
        </TexteApparaissant>
      )}
    </View>
  </View>
);

const concerneUnChiffre = contrat => !["DOUBLE", "TRIPLE"].includes(contrat);

const concerneDoubleOuTriple = contrat =>
  ["DOUBLE", "TRIPLE"].includes(contrat);

const styleDesTouches = {
  fontSize: FontSizes.mini + verticalScale(1.2),
  paddingLeft: scale(4),
  paddingRight: scale(4),
  paddingTop: verticalScale(4)
};

const styleDeContrat = {
  conteneur: {
    alignSelf: "flex-end",
    paddingRight: scale(6),
    paddingBottom: verticalScale(1)
  },
  rempli: {
    fontSize: FontSizes.standard - verticalScale(2),
    color: "#8df69a"
  },
  manque: {
    fontSize: FontSizes.standard - verticalScale(2),
    color: "#f6655d"
  }
};

UnContrat.propTypes = {
  delta: PropTypes.number,
  touches: PropTypes.array,
  contrat: PropTypes.string
};

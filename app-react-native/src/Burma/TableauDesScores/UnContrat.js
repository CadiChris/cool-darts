import PropTypes from "prop-types";
import React from "react";
import { Text, View } from "react-native";
import { Styles, Textes } from "../../styles";
import { HAUTEUR_DE_CONTRAT } from "./TableauDesScores";

export const UnContrat = ({ points, pointsPrecedents }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center"
    }}
  >
    {points > pointsPrecedents && (
      <Text
        style={[
          Textes.light,
          { fontSize: 19, color: "#8df69a", textAlign: "center" }
        ]}
      >
        +{points - pointsPrecedents}
      </Text>
    )}
    {points < pointsPrecedents && (
      <Text
        style={[
          Textes.light,
          { fontSize: 19, color: "#f6655d", textAlign: "center" }
        ]}
      >
        / 2
      </Text>
    )}
  </View>
);

UnContrat.propTypes = {
  points: PropTypes.number,
  pointsPrecedents: PropTypes.number
};

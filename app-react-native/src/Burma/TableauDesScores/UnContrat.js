import PropTypes from "prop-types";
import React from "react";
import { Text, View } from "react-native";
import { Styles, Textes } from "../../styles";
import { HAUTEUR_DE_CONTRAT } from "./TableauDesScores";

export const UnContrat = ({ points, pointsPrecedents }) => (
  <View
    style={[
      Styles.bordureBasse,
      Styles.bordureGauche,
      { height: HAUTEUR_DE_CONTRAT }
    ]}
  >
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 6,
        paddingVertical: 3
      }}
    >
      {points > pointsPrecedents && (
        <Text
          style={[
            Textes.light,
            { fontSize: 14, color: "#8df69a", alignSelf: "flex-start" }
          ]}
        >
          +{points - pointsPrecedents}
        </Text>
      )}
      {points < pointsPrecedents && (
        <Text
          style={[
            Textes.light,
            { fontSize: 14, color: "#f6655d", alignSelf: "flex-start" }
          ]}
        >
          / 2
        </Text>
      )}
      <Text style={[Textes.basique, { fontSize: 19, alignSelf: "flex-end" }]}>
        {points}
      </Text>
    </View>
  </View>
);

UnContrat.propTypes = {
  points: PropTypes.number.isRequired,
  pointsPrecedents: PropTypes.number.isRequired
};

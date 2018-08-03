import { Text, View } from "react-native";
import { Styles, Textes } from "../../styles";
import { HAUTEUR_DE_CONTRAT } from "./TableauDesScores";
import PropTypes from "prop-types";
import React from "react";

export const ContratChiffre = props => (
  <View
    style={[
      Styles.bordureBasse,
      Styles.bordureGauche,
      { height: HAUTEUR_DE_CONTRAT }
    ]}
  >
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={[Textes.basique, { textAlign: "center" }]}>
        {props.points}
      </Text>
    </View>
  </View>
);

ContratChiffre.propTypes = {
  points: PropTypes.number.isRequired
};

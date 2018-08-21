import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { FontSizes, Styles, Textes } from "../../styles";

const Joueur = ({ joueur }) => (
  <View
    style={[
      { flex: 1, justifyContent: "center" },
      Styles.bordureBasse,
      Styles.bordureGauche
    ]}
  >
    <Text
      numberOfLines={1}
      style={[
        Textes.titre,
        {
          fontSize: FontSizes.standard,
          textAlign: "center",
          paddingHorizontal: 10
        }
      ]}
    >
      {joueur}
    </Text>
  </View>
);

Joueur.propTypes = {
  penalite: PropTypes.number.isRequired
};

export default Joueur;

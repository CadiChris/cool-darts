import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { FontSizes, Textes } from "../../styles";
import Emoji from "@ardentlabs/react-native-emoji";

const Vainqueur = ({ nom }) => (
  <View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}
    >
      <Text style={{ fontSize: FontSizes.enorme, color: "white" }}>
        <Emoji name="trophy" />
      </Text>
      <Text style={[Textes.titre]}>{nom}</Text>
    </View>
  </View>
);

Vainqueur.propTypes = {
  nom: PropTypes.string.isRequired
};

export default Vainqueur;

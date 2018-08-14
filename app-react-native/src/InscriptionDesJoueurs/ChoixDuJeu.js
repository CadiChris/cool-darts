import React from "react";
import { View, Text, Dimensions } from "react-native";
import PropTypes from "prop-types";
import SideSwipe from "react-native-sideswipe";
import { Textes } from "../styles";

const ChoixDuJeu = ({ jeuxDisponibles, jeuChoisi, onChangementDeJeu }) => (
  <View style={{ flex: 1 }}>
    <SideSwipe
      data={jeuxDisponibles}
      itemWidth={Dimensions.get("window").width * 0.8}
      style={{ width: "100%", height: 50 }}
      index={jeuxDisponibles.indexOf(jeuChoisi)}
      onIndexChange={index => onChangementDeJeu(jeuxDisponibles[index])}
      renderItem={({ item: jeu }) => (
        <View
          style={{
            width: Dimensions.get("window").width * 0.8,
            justifyContent: "center"
          }}
        >
          <Text style={[Textes.basique, Textes.mav, { textAlign: "center" }]}>
            {jeu.charAt(0).toUpperCase() + jeu.slice(1)}
          </Text>
        </View>
      )}
    />
  </View>
);

ChoixDuJeu.propTypes = {
  jeuxDisponibles: PropTypes.array.isRequired,
  jeuChoisi: PropTypes.string.isRequired,
  onChangementDeJeu: PropTypes.func.isRequired
};

export default ChoixDuJeu;

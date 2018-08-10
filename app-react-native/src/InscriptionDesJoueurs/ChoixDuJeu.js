import React from "react";
import { View, Picker } from "react-native";
import PropTypes from "prop-types";

const ChoixDuJeu = ({ jeuxDisponibles, jeuChoisi, onChangementDeJeu }) => (
  <View style={{ flex: 1 }}>
    <Picker
      selectedValue={jeuChoisi}
      mode="dropdown"
      onValueChange={onChangementDeJeu}
      style={{ color: "white" }}
    >
      {jeuxDisponibles.map(jeu => (
        <Picker.Item
          key={jeu}
          label={jeu.charAt(0).toUpperCase() + jeu.slice(1)}
          value={jeu.toLowerCase()}
        />
      ))}
    </Picker>
  </View>
);

ChoixDuJeu.propTypes = {
  jeuxDisponibles: PropTypes.array.isRequired,
  jeuChoisi: PropTypes.string.isRequired,
  onChangementDeJeu: PropTypes.func.isRequired
};

export default ChoixDuJeu;

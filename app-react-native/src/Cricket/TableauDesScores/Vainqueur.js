import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import Emoji from "react-native-emoji";
import { Textes } from "../styles";

const Vainqueur = ({ taille }) => (
  <Text style={[Textes.basique, { fontSize: taille }]}>
    <Emoji name="trophy" />
  </Text>
);

Vainqueur.propTypes = {
  taille: PropTypes.number.isRequired
};
export default Vainqueur;

import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import Emoji from "@ardentlabs/react-native-emoji";
import { Textes } from "../styles";
import TexteApparaissant from "../Technique/TexteApparaissant";

const Vainqueur = ({ taille }) => (
  <TexteApparaissant departDuDecalage={-70}>
    <Text style={[Textes.basique, { fontSize: taille }]}>
      <Emoji name="trophy" />
    </Text>
  </TexteApparaissant>
);

Vainqueur.propTypes = {
  taille: PropTypes.number.isRequired
};

export default Vainqueur;

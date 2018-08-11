import { Text } from "react-native";
import { Textes } from "../../../styles";
import PropTypes from "prop-types";
import React from "react";

const EnTete = ({ children }) => (
  <Text style={[Textes.basique, { fontSize: 16, textAlign: "center" }]}>
    {children}
  </Text>
);

EnTete.propTypes = {
  chiffreCourant: PropTypes.any,
  lanceur: PropTypes.any
};

export default EnTete;

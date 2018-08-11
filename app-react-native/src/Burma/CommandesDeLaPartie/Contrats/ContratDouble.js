import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { Textes } from "../../../styles";
import EnTete from "./EnTete";

const ContratDouble = ({ lanceur }) => (
  <View>
    <EnTete>Quels DOUBLE a touché {lanceur} ?</EnTete>
  </View>
);

ContratDouble.propTypes = {
  lanceur: PropTypes.string
};

export default ContratDouble;

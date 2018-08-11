import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { Textes } from "../../../styles";
import EnTete from "./EnTete";
import AucuneTouche from "./AucuneTouche";

const ContratDouble = ({ lanceur, onLancer }) => (
  <View>
    <EnTete>Quels DOUBLE a touché {lanceur} ?</EnTete>

    <View
      style={{
        height: 40,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <AucuneTouche onPress={() => onLancer(lanceur, [])} />
    </View>
  </View>
);

ContratDouble.propTypes = {
  lanceur: PropTypes.string,
  onLancer: PropTypes.func.isRequired
};

export default ContratDouble;

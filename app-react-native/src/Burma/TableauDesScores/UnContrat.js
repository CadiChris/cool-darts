import PropTypes from "prop-types";
import React from "react";
import { Text, View } from "react-native";
import { Textes } from "../../styles";

export const UnContrat = ({ delta }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center"
    }}
  >
    {delta > 0 && (
      <Text
        style={[
          Textes.light,
          { fontSize: 19, color: "#8df69a", textAlign: "center" }
        ]}
      >
        +{delta}
      </Text>
    )}
    {delta < 0 && (
      <Text
        style={[
          Textes.light,
          { fontSize: 19, color: "#f6655d", textAlign: "center" }
        ]}
      >
        / 2
      </Text>
    )}
  </View>
);

UnContrat.propTypes = {
  delta: PropTypes.number
};

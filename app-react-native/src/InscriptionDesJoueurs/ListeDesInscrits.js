import React from "react";
import PropTypes from "prop-types";
import { Platform, Text, View } from "react-native";
import { Textes } from "../styles";
import TexteApparaissant from "../Technique/TexteApparaissant";

const ListeDesInscrits = ({ inscrits }) => (
  <View style={{ flex: 1 }}>
    {inscrits.map((nom, index) => (
      <TexteApparaissant key={index} style={[Textes.basique, Textes.mav]}>
        <Text style={[Textes.light, { ...unPeuTransparent }]}>
          #{index + 1}
        </Text>
        {`  ${nom}`}
      </TexteApparaissant>
    ))}
  </View>
);

ListeDesInscrits.propTypes = {
  inscrits: PropTypes.array.isRequired
};

const unPeuTransparent = Platform.select({
  ios: { opacity: 0.5 },
  android: { color: "#8498AB" }
});

export default ListeDesInscrits;

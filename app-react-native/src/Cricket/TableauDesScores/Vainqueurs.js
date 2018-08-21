import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Emoji from "@ardentlabs/react-native-emoji";
import { FontSizes, Textes } from "../../styles";
import TexteApparaissant from "../../Technique/TexteApparaissant";

const Vainqueurs = ({ noms }) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center"
    }}
  >
    <TexteApparaissant departDuDecalage={70}>
      <Text style={[Textes.basique, { fontSize: FontSizes.enorme }]}>
        <Emoji name="trophy" />
      </Text>
    </TexteApparaissant>
    <View>
      {noms.map(nom => (
        <TexteApparaissant
          departDuDecalage={70}
          key={nom}
          style={[Textes.titre]}
        >
          {nom}
        </TexteApparaissant>
      ))}
    </View>
  </View>
);

Vainqueurs.propTypes = {
  noms: PropTypes.array.isRequired
};

export default Vainqueurs;

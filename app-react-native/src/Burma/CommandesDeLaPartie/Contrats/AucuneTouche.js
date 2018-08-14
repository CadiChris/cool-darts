import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Button from "apsl-react-native-button";
import Icon from "react-native-vector-icons/FontAwesome";
import LocalizedStrings from "react-native-localization";
import { Boutons, Textes } from "../../../styles";

const AucuneTouche = props => (
  <View>
    <Button
      style={[Boutons.deCommande, { paddingHorizontal: 20 }]}
      onPress={props.onPress}
    >
      <Icon name="ban" size={20} color="white" style={{ marginRight: 10 }} />
      <Text style={[Textes.light, { fontSize: 20 }]}>{textes.aucun}</Text>
    </Button>
  </View>
);

const textes = new LocalizedStrings({
  en: {
    aucun: "None"
  },
  fr: {
    aucun: "Aucun"
  }
});

AucuneTouche.propTypes = { onPress: PropTypes.func };

export default AucuneTouche;

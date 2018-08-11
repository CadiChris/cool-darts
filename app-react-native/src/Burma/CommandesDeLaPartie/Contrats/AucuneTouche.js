import { Text, View } from "react-native";
import Button from "apsl-react-native-button";
import { Boutons, Textes } from "../../../styles";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";
import React from "react";

const AucuneTouche = props => (
  <View>
    <Button
      style={[Boutons.deCommande, { paddingHorizontal: 20 }]}
      onPress={props.onPress}
    >
      <Icon name="ban" size={20} color="white" style={{ marginRight: 10 }} />
      <Text style={[Textes.light, { fontSize: 20 }]}>Aucun</Text>
    </Button>
  </View>
);

AucuneTouche.propTypes = { onPress: PropTypes.func };

export default AucuneTouche;

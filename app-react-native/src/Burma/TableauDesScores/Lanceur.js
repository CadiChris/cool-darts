import { View } from "react-native";
import { HAUTEUR_DE_CONTRAT } from "./TableauDesScores";
import { Styles } from "../../styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

export const Lanceur = () => (
  <View style={{ height: HAUTEUR_DE_CONTRAT }}>
    <View
      style={[
        Styles.bordureGauche,
        {
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingRight: 2,
          paddingBottom: 1
        }
      ]}
    >
      <Icon name="target" color="white" size={26} style={{ opacity: 0.75 }} />
    </View>
  </View>
);

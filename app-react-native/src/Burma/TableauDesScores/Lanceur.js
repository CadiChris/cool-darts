import { View } from "react-native";
import { HAUTEUR_DE_CONTRAT } from "./TableauDesScores";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

export const Lanceur = () => (
  <View style={{ height: HAUTEUR_DE_CONTRAT }}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Icon name="target" color="white" size={26} style={{ opacity: 0.85 }} />
    </View>
  </View>
);

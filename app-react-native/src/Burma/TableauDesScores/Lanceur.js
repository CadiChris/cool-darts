import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import { HAUTEUR_DE_CONTRAT } from "./TableauDesScores";
import FadeInView from "../../Technique/FadeInView";

export const Lanceur = () => (
  <FadeInView style={[{ height: HAUTEUR_DE_CONTRAT }]} dureeDuFade={300}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Icon name="target" color="white" size={20} style={{ opacity: 0.85 }} />
    </View>
  </FadeInView>
);

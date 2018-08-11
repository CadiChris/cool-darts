import React from "react";
import { Text, View } from "react-native";
import { Textes } from "../../styles";
import { BULL, CHIFFRES_DU_BURMA } from "../arbitrage/chiffre";
import { HAUTEUR_DE_CONTRAT } from "./TableauDesScores";

export const ColonneDesContrats = () => (
  <View style={{ width: 90, marginTop: 40, paddingLeft: 5 }}>
    {CHIFFRES_DU_BURMA.map(contrat => (
      <View key={contrat} style={[{ height: HAUTEUR_DE_CONTRAT }]}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={[Textes.light, { fontSize: 18 }]}>
            {contrat === BULL ? "BULL" : contrat}
          </Text>
        </View>
      </View>
    ))}
  </View>
);

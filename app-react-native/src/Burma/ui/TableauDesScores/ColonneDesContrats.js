import React from "react";
import { Text, View } from "react-native";
import { FontSizes, Textes } from "../../../styles";
import { BULL, CHIFFRES_DU_BURMA } from "../../domaine/arbitrage/chiffre";
import { HAUTEUR_DE_CONTRAT } from "./TableauDesScores";
import { scale } from "react-native-size-matters";

export const ColonneDesContrats = () => (
  <View
    style={{
      width: scale(90),
      marginTop: HAUTEUR_DE_CONTRAT,
      paddingLeft: scale(5)
    }}
  >
    {CHIFFRES_DU_BURMA.map(contrat => (
      <View key={contrat} style={[{ height: HAUTEUR_DE_CONTRAT }]}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={[Textes.light, { fontSize: FontSizes.standard }]}>
            {contrat === BULL ? "BULL" : contrat}
          </Text>
        </View>
      </View>
    ))}
  </View>
);

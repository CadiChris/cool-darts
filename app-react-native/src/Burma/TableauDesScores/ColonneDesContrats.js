import { Text, View } from "react-native";
import { Styles, Textes } from "../../styles";
import { CHIFFRES_DU_BURMA } from "../arbitrage/chiffre";
import PropTypes from "prop-types";
import React from "react";
import { HAUTEUR_DU_CONTRAT_DE_DEPART } from "./TableauDesScores";

export const ColonneDesContrats = () => (
  <View style={{ width: 90, marginTop: 40 }}>
    <View
      style={[{ height: HAUTEUR_DU_CONTRAT_DE_DEPART }, Styles.bordureBasse]}
    >
      <View style={{ flex: 1, justifyContent: "center" }} />
    </View>
    {CHIFFRES_DU_BURMA.map(contrat => (
      <View key={contrat} style={[{ height: 40 }, Styles.bordureBasse]}>
        <View style={{ flex: 1, paddingLeft: 5, justifyContent: "center" }}>
          <Text style={[Textes.light, { fontSize: 18 }]}>{contrat}</Text>
        </View>
      </View>
    ))}
  </View>
);

ColonneDesContrats.propTypes = { callbackfn: PropTypes.func };

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import i18n from "i18n-js";
import { FormulaireInscription } from "./FormulaireInscription";
import Titre from "./Titre";
import { Couleurs } from "../../styles";
import { ChoixDuJeu } from "./ChoixDuJeu";
import { Demarrer } from "./Demarrer";

export const InscriptionDesJoueurs = () => (
  <View style={$.principal}>
    <View style={$.haut}>
      <Titre />

      <SousTitre chiffre="1." texte={i18n.t("choixJeu")} />
      <ChoixDuJeu style={$.choixDuJeu} />

      <SousTitre chiffre="2." texte={i18n.t("inscrire")} />
      <FormulaireInscription />
    </View>
    <Demarrer style={$.demarrer} />
  </View>
);

function SousTitre(props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={$.sousTitre.vert}>{props.chiffre}</Text>
      <Text style={$.sousTitre.blanc}>{props.texte}</Text>
    </View>
  );
}

const $ = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: Couleurs.fond,
    justifyContent: "space-between",
  },
  haut: {
    paddingHorizontal: 10,
  },
  choixDuJeu: { marginBottom: 30 },
  sousTitre: {
    vert: {
      color: Couleurs.vertUn,
      marginRight: 5,
      fontSize: 18,
      fontWeight: "bold",
    },
    blanc: { color: Couleurs.blanc, fontSize: 18 },
  },
});

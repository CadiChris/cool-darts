import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { Couleurs } from "../../styles";
import { useInscription } from "../../redux";
import { choisirJeu } from "../domaine/actions";

export function ChoixDuJeu({ style }) {
  const dispatch = useDispatch();
  const jeuChoisi = useInscription("jeuChoisi");

  return (
    <View style={[$.principal, style]}>
      <TouchableOpacity
        style={[$.boite, getStyleBoite("cricket")]}
        onPress={() => dispatch(choisirJeu("cricket"))}
      >
        <Text style={[$.texte.petit, getStyleTexte("cricket")]}>
          Cut-Throat
        </Text>
        <Text style={[$.texte.grand, getStyleTexte("cricket")]}>Cricket</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[$.boite, getStyleBoite("burma")]}
        onPress={() => dispatch(choisirJeu("burma"))}
      >
        <Text style={[$.texte.grand, getStyleTexte("burma")]}>Burma</Text>
      </TouchableOpacity>
    </View>
  );

  function getStyleBoite(jeu) {
    return jeuChoisi === jeu ? $.jeuActif : $.jeuInactif;
  }

  function getStyleTexte(jeu) {
    return jeuChoisi === jeu ? $.texte.jeuActif : $.texte.jeuInactif;
  }
}

const $ = StyleSheet.create({
  principal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    columnGap: 10,
  },
  boite: {
    borderRadius: 6,
    flex: 1,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  jeuActif: {
    backgroundColor: Couleurs.vertUn,
  },
  jeuInactif: {
    backgroundColor: Couleurs.sombreUn,
  },
  texte: {
    petit: { fontSize: 12 },
    grand: { fontSize: 22 },
    jeuActif: { color: Couleurs.vertDeux, fontWeight: "bold" },
    jeuInactif: { color: Couleurs.sombreDeux, fontWeight: "bold" },
  },
});

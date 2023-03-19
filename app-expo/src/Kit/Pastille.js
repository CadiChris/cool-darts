import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useInscriptionFn } from "../redux";
import { couleurDuJoueur } from "../InscriptionDesJoueurs/domaine/reducer";

export const PastilleJoueur = ({ joueur }) => {
  if (!joueur) return <></>;

  return (
    <Pastille
      lettre={joueur.charAt(0)}
      couleur={useInscriptionFn(couleurDuJoueur, joueur)}
    />
  );
};

export function Pastille({ lettre, couleur, style }) {
  const backgroundColor = () => ({ backgroundColor: couleur.backgroundColor });

  const fontColor = () => ({ color: couleur.color });

  return (
    <View style={[$.principal, backgroundColor(), style]}>
      <Text style={[$.texte, fontColor()]}>{lettre}</Text>
    </View>
  );
}

const $ = StyleSheet.create({
  principal: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  texte: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 23,
  },
});

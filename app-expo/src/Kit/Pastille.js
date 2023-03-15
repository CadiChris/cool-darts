import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Pastille({ lettre, index, couleur, style }) {
  const backgroundColor = (i) => ({
    backgroundColor:
      couleur?.backgroundColor ??
      $.couleurs[i % $.couleurs.length].backgroundColor,
  });

  const fontColor = (i) => ({
    color: couleur?.color ?? $.couleurs[i % $.couleurs.length].color,
  });

  return (
    <View style={[$.principal, backgroundColor(index), style]}>
      <Text style={[$.texte, fontColor(index)]}>{lettre}</Text>
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
  couleurs: [
    { backgroundColor: "#526CE5", color: "#192E90" },
    { backgroundColor: "#E496DE", color: "#A03698" },
    { backgroundColor: "#EF5C80", color: "#6E0D25" },
    { backgroundColor: "#FFEC3C", color: "#79700D" },
    { backgroundColor: "#FF9B11", color: "#6D4814" },
    { backgroundColor: "#5CBAFE", color: "#285D83" },
  ],
  texte: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 23,
  },
});

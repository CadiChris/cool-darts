import React from "react";
import { StyleSheet, Text, View } from "react-native";

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

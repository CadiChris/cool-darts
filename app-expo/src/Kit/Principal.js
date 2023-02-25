import React from "react";
import { StyleSheet, View } from "react-native";
import { Couleurs } from "../styles";

export const Principal = ({ children }) => {
  return <View style={$.principal}>{children}</View>;
};

const $ = StyleSheet.create({
  principal: { flex: 1, backgroundColor: Couleurs.fond, paddingTop: 20 },
});

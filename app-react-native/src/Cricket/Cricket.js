import React from "react";
import { View } from "react-native";
import TableauDesScores from "./TableauDesScores/TableauDesScores.container";
import CommandesDeLaPartie from "./CommandesDeLaPartie/CommandesDeLaPartie.container";
import { Styles } from "../styles";

const Cricket = () => (
  <View style={Styles.container}>
    <TableauDesScores />
    <CommandesDeLaPartie />
  </View>
);

export default Cricket;

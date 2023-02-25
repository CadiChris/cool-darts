import { StyleSheet, Text, View } from "react-native";
import { Couleurs } from "../../styles";
import { TableauDesScores } from "./TableauDesScores";
import { CommandesPartie } from "./CommandesPartie";

export function Cricket() {
  return (
    <View style={$.principal}>
      <View style={$.titre.boite}>
        <Text style={$.titre.texte}>Cricket</Text>
      </View>

      <TableauDesScores />

      <CommandesPartie
        joueur="Olive"
        touches={[
          { chiffre: 19, fois: 1 },
          { chiffre: 17, fois: 2 },
        ]}
      />
    </View>
  );
}

const $ = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: Couleurs.fond,
  },
  titre: {
    boite: {
      marginVertical: 30,
      height: 30,
      flexDirection: "row",
      justifyContent: "center",
    },
    texte: {
      color: Couleurs.blanc,
      textAlign: "center",
      fontSize: 25,
    },
  },
});

import { StyleSheet, Text, View } from "react-native";
import { Couleurs } from "../../styles";

export function CommandesPartie() {
  return (
    <View style={$.principal}>
      <Text>Truc</Text>
    </View>
  );
}

const $ = StyleSheet.create({
  principal: {
    backgroundColor: Couleurs.sombreQuatre,
    flex: 1,
  },
});

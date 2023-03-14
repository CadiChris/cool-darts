import { Text, View, StyleSheet } from "react-native";
import { Couleurs } from "../../styles";
import { HauteurLigneDeTableau } from "./style";

export function ColonneChiffres() {
  return (
    <View style={$.principal}>
      <Text style={$.chiffre}>20</Text>
      <Text style={$.chiffre}>19</Text>
      <Text style={$.chiffre}>18</Text>
      <Text style={$.chiffre}>17</Text>
      <Text style={$.chiffre}>16</Text>
      <Text style={$.chiffre}>15</Text>
      <Text style={$.chiffre}>Bull</Text>
    </View>
  );
}

const $ = StyleSheet.create({
  principal: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    marginTop: HauteurLigneDeTableau + 1,
    backgroundColor: Couleurs.sombreQuatre,
    borderRadius: 6,
    height: 7 * HauteurLigneDeTableau + 7 * 2,
  },
  chiffre: {
    height: HauteurLigneDeTableau,
    textAlignVertical: "center",
    color: Couleurs.blanc,
    fontSize: 18,
    marginBottom: 2,
  },
});

import { StyleSheet, View } from "react-native";
import { useCricketFn } from "../../redux";
import { joueursEnGroupe } from "../domaine/reducer";
import { ColonneJoueur } from "./ColonneJoueur";
import { ColonneChiffres } from "./ColonneChiffres";

export function TableauDesScores({ onTap }) {
  const [groupe1, groupe2] = useCricketFn(joueursEnGroupe);

  return (
    <View style={$.principal}>
      {groupe1.map((j) => (
        <ColonneJoueur key={j} joueur={j} onTap={onTap} />
      ))}
      <ColonneChiffres />
      {groupe2.map((j) => (
        <ColonneJoueur key={j} joueur={j} onTap={onTap} />
      ))}
    </View>
  );
}

const $ = StyleSheet.create({
  principal: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
});

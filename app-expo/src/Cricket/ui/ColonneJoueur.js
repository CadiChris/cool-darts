import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Couleurs } from "../../styles";
import { useCricketFn } from "../../redux";
import { scoreDuJoueur } from "../domaine/reducer";
import { X } from "../../../assets/X.svg.js";
import { Ferme } from "../../../assets/Ferme.svg.js";

export function ColonneJoueur({ joueur, onTap }) {
  const score = useCricketFn(scoreDuJoueur, joueur);
  const t = (chiffre) => score.cible[chiffre].touches;

  return (
    <View style={$.principal}>
      <View style={$.vignette}>
        <Text style={$.pseudo}>{joueur.charAt(0)}</Text>
      </View>
      <Chiffre nbTouches={t(20)} onTap={() => onTap(joueur, 20)} />
      <Chiffre nbTouches={t(19)} onTap={() => onTap(joueur, 19)} />
      <Chiffre nbTouches={t(18)} onTap={() => onTap(joueur, 18)} />
      <Chiffre nbTouches={t(17)} onTap={() => onTap(joueur, 17)} />
      <Chiffre nbTouches={t(16)} onTap={() => onTap(joueur, 16)} />
      <Chiffre nbTouches={t(15)} onTap={() => onTap(joueur, 15)} />
      <Chiffre nbTouches={t(25)} onTap={() => onTap(joueur, 25)} />
      <Score>{score.penalite}</Score>
    </View>
  );
}

const Chiffre = ({ nbTouches, onTap }) => {
  const ouvert = nbTouches < 3;
  return (
    <TouchableOpacity onPress={onTap}>
      {ouvert ? (
        <View style={[$.case, $.chiffre]}>
          {Array.from({ length: nbTouches }, (_, i) => (
            <X key={i} width={15} height={15} />
          ))}
        </View>
      ) : (
        <View style={[$.case, $.ferme]}>
          <Ferme width={24} height={24} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const Score = ({ children }) => <Text style={$.score}>{children}</Text>;

const $ = StyleSheet.create({
  principal: {
    flexDirection: "column",
    flex: 1,
    marginHorizontal: 5,
  },
  vignette: {
    backgroundColor: Couleurs.sombreUn,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 2,
  },
  pseudo: { color: Couleurs.blanc },
  case: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 2,
  },
  chiffre: {
    backgroundColor: Couleurs.sombreUn,
    paddingHorizontal: 10,
  },
  ferme: {
    backgroundColor: Couleurs.vertUn,
    height: 50,
  },
  score: {
    height: 50,
    backgroundColor: Couleurs.sombreCinq,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    color: Couleurs.blanc,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
});

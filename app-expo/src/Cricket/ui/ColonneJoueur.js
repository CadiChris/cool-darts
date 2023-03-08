import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Couleurs } from "../../styles";

export function ColonneJoueur({ joueur, onTap }) {
  return (
    <View style={$.principal}>
      <View style={$.vignette}>
        <Text style={$.pseudo}>{joueur.charAt(0)}</Text>
      </View>
      <Chiffre chiffre={20} onTap={() => onTap(joueur, 20)} />
      <Chiffre chiffre={19} onTap={() => onTap(joueur, 19)} />
      <Chiffre chiffre={18} onTap={() => onTap(joueur, 18)} />
      <Chiffre chiffre={17} onTap={() => onTap(joueur, 17)} />
      <Chiffre chiffre={16} onTap={() => onTap(joueur, 16)} />
      <Chiffre chiffre={15} onTap={() => onTap(joueur, 15)} />
      <Chiffre chiffre={25} onTap={() => onTap(joueur, 25)} />
      <Score />
    </View>
  );
}

const Chiffre = ({ onTap }) => (
  <TouchableOpacity onPress={onTap}>
    <Text style={$.chiffre}></Text>
  </TouchableOpacity>
);

const Score = () => <Text style={$.score}>0</Text>;

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
  chiffre: {
    height: 50,
    backgroundColor: Couleurs.sombreUn,
    marginBottom: 2,
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

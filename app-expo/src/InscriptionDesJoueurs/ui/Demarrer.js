import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import i18n from "i18n-js";
import { useInscription } from "../../redux";
import { Couleurs } from "../../styles";

export function Demarrer() {
  const peutDemarrer = useInscription("laPartiePeutDemarrer");
  const styleBouton = peutDemarrer ? $.actif.bouton : $.inactif.bouton;
  const styleTexte = peutDemarrer ? $.actif.texte : $.inactif.texte;

  return (
    <View style={[$.principal]}>
      <TouchableOpacity style={{ width: "100%" }} disabled={!peutDemarrer}>
        <View style={[$.bouton, styleBouton]}>
          <Text style={[$.texte, styleTexte]}>{i18n.t("jouer")}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const $ = StyleSheet.create({
  principal: {
    height: 110,
    backgroundColor: Couleurs.sombreQuatre,
    alignItems: "center",
    justifyContent: "center",
  },
  bouton: {
    borderRadius: 25,
    paddingVertical: 10,
    marginHorizontal: 30,
  },
  actif: {
    bouton: { backgroundColor: Couleurs.vertUn },
    texte: { color: Couleurs.vertDeux },
  },
  inactif: {
    bouton: { backgroundColor: Couleurs.sombreUn },
    texte: { color: Couleurs.sombreDeux },
  },
  texte: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
});

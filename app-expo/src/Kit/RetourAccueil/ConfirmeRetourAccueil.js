import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import i18n from "i18n-js";
import { Couleurs } from "../../styles";

export function ConfirmeRetourAccueil() {
  const navigation = useNavigation();
  const annulerRetour = () => navigation.goBack();
  const retourAccueil = () => navigation.navigate("/");

  return (
    <View style={[$.principal]}>
      <View style={[$.boite]}>
        <Text style={[$.titre]}>{i18n.t("retourAccueil.titre1")}</Text>
        <Text style={[$.titre]}>{i18n.t("retourAccueil.titre2")}</Text>
        <View style={[$.boutons]}>
          <TouchableNativeFeedback onPress={annulerRetour}>
            <View style={[$.bouton.boite, $.bouton.non]}>
              <Text style={[$.bouton.texte, $.bouton.texteNon]}>
                {i18n.t("retourAccueil.annuler")}
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={retourAccueil}>
            <View style={[$.bouton.boite, $.bouton.oui]}>
              <Text style={[$.bouton.texte, $.bouton.texteOui]}>
                {i18n.t("retourAccueil.confirmer")}
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
}

const $ = StyleSheet.create({
  principal: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 35,
  },
  boite: {
    backgroundColor: Couleurs.vertUn,
    paddingVertical: 22,
    paddingHorizontal: 25,
    width: "100%",
    borderRadius: 8,
  },
  titre: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: Couleurs.vertTrois,
  },
  boutons: { marginTop: 20, rowGap: 15 },
  bouton: {
    boite: {
      borderRadius: 25,
      borderWidth: 1,
      borderColor: Couleurs.vertDeux,
      paddingVertical: 10,
    },
    non: { backgroundColor: Couleurs.vertTrois },
    texte: { fontSize: 19, fontWeight: "bold", textAlign: "center" },
    texteNon: { color: Couleurs.blanc },
    texteOui: { color: Couleurs.vertTrois },
  },
});

import React from "react";
import { Text, View } from "react-native";
import { Styles, Textes, Boutons } from "../styles";
import ViewQuiDecale from "../Technique/ViewQuiDecale";
import Button from "apsl-react-native-button";
import LocalizedStrings from "react-native-localization";
import Icon from "react-native-vector-icons/FontAwesome";

export default ({ vainqueurs, declencherNouvellePartie }) => (
  <View style={[Styles.contenuAuMilieu, { justifyContent: "space-around" }]}>
    <ViewQuiDecale dureeDuDecalage={1200} coteDeDepart="right">
      <Text style={[Textes.titre, {}]}>{textes.finDePartie}</Text>
    </ViewQuiDecale>

    <ViewQuiDecale
      dureeDuDecalage={1200}
      coteDeDepart="left"
      style={[{ height: "70%", justifyContent: "space-around" }]}
    >
      <View>
        <Text
          style={[
            Textes.light,
            { fontSize: 18, opacity: 0.8, textAlign: "center" }
          ]}
        >
          {textes.vainqueur}
        </Text>
        <Text style={[Textes.titre, { textAlign: "center" }]}>
          {" "}
          {vainqueurs.map(v => v)}
        </Text>
      </View>

      <Button
        onPress={declencherNouvellePartie}
        style={[
          Boutons.deCommande,
          { width: 60, height: 50, alignSelf: "center" }
        ]}
        textStyle={[Textes.bouton, { fontSize: 12 }]}
      >
        <Icon name="home" size={20} color="white" />
      </Button>
    </ViewQuiDecale>
  </View>
);

const textes = new LocalizedStrings({
  en: {
    finDePartie: "Game Over",
    vainqueur: "Winner"
  },
  fr: {
    finDePartie: "Fin de partie",
    vainqueur: "Vainqueur"
  }
});

import React from "react";
import LocalizedStrings from "react-native-localization";
import { View } from "react-native";
import Button from "apsl-react-native-button";
import { Boutons, Textes } from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";
import BoutonAvecConfirmation from "../../Technique/BoutonAvecConfirmation";

export default ({
  aucunPrecedent: undoImpossible,
  declencherNouvellePartie,
  declencherUndo
}) => (
  <View
    style={[
      {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
      }
    ]}
  >
    <BoutonAvecConfirmation
      titre={textes.titre}
      message={textes.message}
      apresConfirmation={declencherNouvellePartie}
      style={[
        Boutons.deCommande,
        { width: 60, height: 50, marginHorizontal: 30 }
      ]}
      textStyle={[Textes.bouton, { fontSize: 12 }]}
    >
      <Icon name="home" size={20} color="white" />
    </BoutonAvecConfirmation>

    <Button
      onPress={declencherUndo}
      isDisabled={undoImpossible}
      style={[
        Boutons.deCommande,
        { width: 60, height: 50, marginHorizontal: 30 }
      ]}
      textStyle={[Textes.bouton, { fontSize: 12 }]}
    >
      <Icon name="undo" size={20} color="white" />
    </Button>
  </View>
);

const textes = new LocalizedStrings({
  en: {
    titre: "End the game",
    message: "Are you sure you want to end the game?"
  },
  fr: {
    titre: "Quitter la partie",
    message: "Êtes-vous sûr de vouloir quitter la partie ?"
  }
});

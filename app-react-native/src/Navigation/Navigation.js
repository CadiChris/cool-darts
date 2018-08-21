import React from "react";
import PropTypes from "prop-types";
import LocalizedStrings from "react-native-localization";
import { View } from "react-native";
import Button from "apsl-react-native-button";
import { Boutons, Textes } from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";
import BoutonAvecConfirmation from "../Technique/BoutonAvecConfirmation";

const Navigation = ({
  aucunPrecedent,
  onQuitterLaPartie,
  onUndo,
  onRedo,
  aucunSuivant
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
      apresConfirmation={onQuitterLaPartie}
      style={[
        Boutons.deCommande,
        { width: 60, height: 50, marginHorizontal: 30 }
      ]}
      textStyle={[Textes.bouton]}
    >
      <Icon name="home" size={20} color="white" />
    </BoutonAvecConfirmation>

    <Button
      onPress={onUndo}
      isDisabled={aucunPrecedent}
      style={[
        Boutons.deCommande,
        { width: 60, height: 50, marginHorizontal: 30 }
      ]}
      textStyle={[Textes.bouton]}
    >
      <Icon name="undo" size={20} color="white" />
    </Button>
    <Button
      onPress={onRedo}
      isDisabled={aucunSuivant}
      style={[
        Boutons.deCommande,
        { width: 60, height: 50, marginHorizontal: 30 }
      ]}
      textStyle={[Textes.bouton]}
    >
      <Icon
        name="undo"
        size={20}
        color="white"
        style={{ transform: [{ rotateY: "180deg" }] }}
      />
    </Button>
  </View>
);

Navigation.propTypes = {
  aucunPrecedent: PropTypes.bool.isRequired,
  onUndo: PropTypes.func.isRequired,
  aucunSuivant: PropTypes.bool.isRequired,
  onRedo: PropTypes.func.isRequired,
  onQuitterLaPartie: PropTypes.func.isRequired
};

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

export default Navigation;

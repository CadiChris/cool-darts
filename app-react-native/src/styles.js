import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const Tailles = {
  hauteurEnTete: 30,
  largeurDeLaColonneJoueur: 3
};

// Palette de couleurs : https://digitalsynopsis.com/design/minimal-web-color-palettes-combination-hex-code/
export const Couleurs = {
  bordure: "white",
  fond: "#355C7D",
  un: "#6C5B7B",
  deux: "#C06C84",
  trois: "#F67280",
  quatre: "#F8B195"
};

const fonts = {
  basique: "Lato-Regular",
  epaisse: "Lato-BlackItalic",
  fine: "Lato-Italic"
};

export const FontSizes = {
  enorme: moderateScale(52, 1.2),
  standard: moderateScale(18)
};

export const Textes = StyleSheet.create({
  basique: {
    fontFamily: fonts.basique,
    color: "white"
  },
  titre: {
    fontFamily: fonts.epaisse,
    fontSize: FontSizes.enorme,
    color: "white"
  },
  light: {
    fontFamily: fonts.fine,
    color: "white"
  },
  bouton: {
    fontFamily: fonts.fine,
    color: "white"
  }
});

export const Boutons = StyleSheet.create({
  principal: {
    backgroundColor: Couleurs.un,
    borderTopWidth: 0,
    borderBottomWidth: 0.25,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 0
  },
  secondaire: {
    backgroundColor: Couleurs.deux,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0.25,
    borderWidth: 0
  },
  deCommande: {
    backgroundColor: Couleurs.un,
    borderWidth: 0,
    opacity: 0.9,
    borderBottomWidth: 0.25
  }
});

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Couleurs.fond
  },
  contenuAuMilieu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bordureGauche: {
    borderLeftColor: Couleurs.bordure,
    borderLeftWidth: 1
  },
  bordureDroite: {
    borderRightColor: Couleurs.bordure,
    borderRightWidth: 1
  },
  bordureBasse: {
    borderBottomColor: Couleurs.bordure,
    borderBottomWidth: 1
  },
  bordureHaute: {
    borderTopColor: Couleurs.bordure,
    borderTopWidth: 1
  },
  chiffreFerme: {
    backgroundColor: Couleurs.trois
  }
});

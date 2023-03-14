import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

// Palette de couleurs : https://digitalsynopsis.com/design/minimal-web-color-palettes-combination-hex-code/
export const Couleurs = {
  fond: "#0C1E31",
  vertUn: "#2ECFAB",
  vertDeux: "#155B4C",
  sombreUn: "#162F4B",
  sombreDeux: "#809AB8",
  sombreTrois: "#36495F",
  sombreQuatre: "#0B1828",
  sombreCinq: "#193759",
  sombreSix: "#A6B1C9",
  blanc: "#fff",
};

const fonts = {
  basique: "Lato-Regular",
  epaisse: "Lato-BlackItalic",
  fine: "Lato-Italic",
};

export const FontSizes = {
  enorme: moderateScale(52, 1.2),
  grand: moderateScale(30, 1.2),
  standard: scale(17),
  mini: scale(9.5),
};

export const Textes = StyleSheet.create({
  basique: {
    fontFamily: fonts.basique,
    color: "white",
  },
  titre: {
    fontFamily: fonts.epaisse,
    fontSize: FontSizes.enorme,
    color: "white",
  },
  light: {
    fontFamily: fonts.fine,
    color: "white",
  },
  bouton: {
    fontFamily: fonts.fine,
    color: "white",
  },
});

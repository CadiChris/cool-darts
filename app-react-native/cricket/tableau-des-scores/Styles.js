import React from 'react'
import { StyleSheet } from 'react-native'

export const Tailles = {
  hauteurEnTete: 30,
  largeurDeLaColonneJoueur: 3
}

export const Couleurs = {
  bordure: 'white'
}

export const Styles = StyleSheet.create({
  contenuAuMilieu: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  bordureDroite: {
    borderRightColor: Couleurs.bordure,
    borderRightWidth: 1
  },
  bordureBasse: {
    borderBottomColor: Couleurs.bordure,
    borderBottomWidth: 1
  }
});
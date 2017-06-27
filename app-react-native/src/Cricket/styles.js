import React from 'react'
import { StyleSheet } from 'react-native'

export const Tailles = {
  hauteurEnTete: 30,
  largeurDeLaColonneJoueur: 3
}

export const Couleurs = {
  bordure: 'white'
}

const fontParDefaut = 'Magnolia Script'
export const Textes = StyleSheet.create({
  basique: {
    fontFamily: fontParDefaut
  },
  titre: {
    fontFamily: fontParDefaut,
    fontSize: 34,
    color: 'white'
  },
  bouton: {
    fontFamily: fontParDefaut,
    color: '#C06C84'
  }
})

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#355C7D',
    paddingTop: 25
  },
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
  },
  chiffreFerme: {
    backgroundColor: 'lightgray'
  }
});
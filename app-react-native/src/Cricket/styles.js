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
    fontFamily: fontParDefaut,
    color: 'white'
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

export const Boutons = StyleSheet.create({
  principal: {
    backgroundColor: '#6C5B7B',
    borderTopWidth: 0,
    borderBottomWidth: 0.4,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  secondaire: {
    backgroundColor: '#C06C84',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  }
})

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#355C7D',
    paddingTop: 25
  },
  contenuAuMilieu: {
    flex: 1,
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
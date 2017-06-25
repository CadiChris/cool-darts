export function lancerFlechette(joueur, chiffre, touches) {
  return {
    type: 'LANCER_FLECHETTE',
    joueur,
    chiffre,
    touches
  }
}

export function signalerChiffre(chiffre) {
  return {
    type: 'SIGNALER_CHIFFRE',
    chiffre
  }
}
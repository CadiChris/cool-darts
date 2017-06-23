export function lancerFlechette(joueur, chiffre, touches) {
  return {
    type: 'LANCER_FLECHETTE',
    joueur,
    chiffre,
    touches
  }
}
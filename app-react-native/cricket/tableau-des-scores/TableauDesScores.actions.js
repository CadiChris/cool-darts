
export function ajouterJoueur(nomDuJoueur) {
  return {
    type: 'AJOUTER_JOUEUR',
    nomDuJoueur
  }
}

export function lancerFlechette(joueur, chiffre, touches) {
  return {
    type: 'LANCER_FLECHETTE',
    joueur,
    chiffre,
    touches
  }
}
export function inscrireJoueur(joueur) {
  return {
    type: 'INSCRIRE_JOUEUR',
    joueur
  }
}

export function demarrerPartie() {
  return {type: 'DEMARRER_PARTIE'}
}
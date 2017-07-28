const INSCRIRE_JOUEUR = 'INSCRIRE_JOUEUR'
const inscrireJoueur = (nomDuJoueur) => ({
  type: INSCRIRE_JOUEUR,
  payload: {
    nomDuJoueur
  }
})

const DEMARRER_PARTIE = 'DEMARRER_PARTIE'
const demarrerPartie = () => ({
  type: DEMARRER_PARTIE
})

export {
  INSCRIRE_JOUEUR,
  inscrireJoueur,

  DEMARRER_PARTIE,
  demarrerPartie
}
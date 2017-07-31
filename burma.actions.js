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

const VOLEE = 'VOLEE'
const volee = (lanceur, chiffre, nombreDeTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    chiffre,
    nombreDeTouches
  }
})

export {
  INSCRIRE_JOUEUR,
  inscrireJoueur,

  DEMARRER_PARTIE,
  demarrerPartie,

  VOLEE,
  volee
}
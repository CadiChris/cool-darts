
const INSCRIRE_JOUEUR = 'INSCRIRE_JOUEUR'

const inscrireJoueur = (nomDuJoueur) => {
  return {
    type: INSCRIRE_JOUEUR,
    payload: {
      nomDuJoueur
    }
  }
}

export {
  INSCRIRE_JOUEUR,
  inscrireJoueur
}
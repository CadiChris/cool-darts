import { DEMARRER_PARTIE, VOLEE } from "./burma.actions";

function lanceur(state = undefined, action) {
  switch (action.type) {

    case DEMARRER_PARTIE :
      return state.joueurs[0]

    case VOLEE :
      const nombreDeJoueurs = state.joueurs.length
      const indexDuLanceur = state.joueurs.indexOf(state.lanceur)
      const prochainLanceur = state.joueurs[(indexDuLanceur + 1) % nombreDeJoueurs]
      return prochainLanceur

    default:
      return state
  }
}

export {
  lanceur
}
import { INSCRIRE_JOUEUR, DEMARRER_PARTIE, VOLEE } from "./burma.actions";
import { joueurs } from "./joueurs";
import { lanceur } from "./lanceur";
import { phase } from "./phase";
import { scores } from "./scores";
import { chiffreCourant } from "./chiffreCourant";

const burma = (state = STATE_INITIAL, action) => {
  switch (action.type) {

    case INSCRIRE_JOUEUR:
      return {
        ...state,
        joueurs: joueurs(state.joueurs, action),
        scores: scores(state.scores, action)
      }

    case DEMARRER_PARTIE:
      return {
        ...state,
        lanceur: lanceur(state, action),
        scores: scores(state.scores, action),
        phase: phase(state.phase, action),
        chiffreCourant: chiffreCourant(state, action)
      }

    case VOLEE:
      return {
        ...state,
        lanceur: lanceur(state, action),
        chiffreCourant: chiffreCourant(state, action),
        scores: scores(state.scores, action)
      }

    default:
      return state
  }
}

const STATE_INITIAL = {
  joueurs: joueurs(undefined, {}),
  lanceur: lanceur(undefined, {}),
  scores: scores(undefined, {}),
  phase: phase(undefined, {})
}

export {
  burma
}
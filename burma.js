import { INSCRIRE_JOUEUR, DEMARRER_PARTIE } from "./burma.actions";

const burma = (state = STATE_INITIAL, action) => {
  switch (action.type) {
    case INSCRIRE_JOUEUR:
      return {
        ...state,
        joueurs: [...state.joueurs, action.payload.nomDuJoueur]
      }

    case DEMARRER_PARTIE:
      return {
        ...state,
        lanceur: state.joueurs[0],
        scores: state.joueurs.map(scoreVierge),
        phase: 'EN_COURS'
      }

    default:
      return state
  }
}

const STATE_INITIAL = {
  joueurs: [],
  lanceur: undefined,
  scores: [],
  phase: "INSCRIPTION"
}

const scoreVierge = (joueur) => ({
  joueur,
  touches: {
    15: 0,
    16: 0,
    D: 0,
    17: 0,
    18: 0,
    T: 0,
    19: 0,
    20: 0,
    B: 0
  }
})

export {
  burma
}
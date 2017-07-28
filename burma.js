import { INSCRIRE_JOUEUR } from "./burma.actions";

const burma = (state = STATE_INITIAL, action) => {
  switch (action.type) {
    case INSCRIRE_JOUEUR:
      return {
        ...state,
        joueurs: [...state.joueurs, action.payload.nomDuJoueur]
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

export {
  burma
}
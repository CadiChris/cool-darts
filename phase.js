import { DEMARRER_PARTIE } from "./burma.actions";

function phase(state = "INSCRIPTION", action) {

  switch (action.type) {
    case DEMARRER_PARTIE :
      return "EN_COURS"

    default :
      return state
  }
}

export {
  phase
}
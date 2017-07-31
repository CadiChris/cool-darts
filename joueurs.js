import { INSCRIRE_JOUEUR } from "./burma.actions";

function joueurs(state = [], action) {
  switch (action.type) {

    case INSCRIRE_JOUEUR :
      return [
        ...state.joueurs,
        action.payload.nomDuJoueur
      ]

    default :
      return state
  }
}

export {
  joueurs
}
const stateInitial = {
  phase: 'INSCRIPTION',
  joueurs: [],
  peutDemarrer: false
}

export default function partie(state = stateInitial, action) {
  switch (action.type) {
    case 'INSCRIRE_JOUEUR':
      return {
        ...state,
        joueurs: [...state.joueurs, action.joueur],
        peutDemarrer: state.joueurs.length > 0
      }

    case 'DEMARRER_PARTIE':
      return {
        ...state,
        phase: 'EN_COURS'
      }

    default:
      return state
  }
}
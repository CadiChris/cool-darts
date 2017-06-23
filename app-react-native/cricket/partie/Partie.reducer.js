const stateInitial = {
  phase: 'INSCRIPTION',
  lanceur: null,
  joueurs: [],
  peutDemarrer: false
}

export default function partie(state = stateInitial, action) {
  switch (action.type) {
    case 'INSCRIRE_JOUEUR':
      return {
        ...state,
        joueurs: [...state.joueurs, action.joueur],
        peutDemarrer: true
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
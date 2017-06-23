const stateInitial = {
  phase: 'INSCRIPTION',
  lanceur: null,
  joueurs: []
}

export default function partie(state = stateInitial, action) {
  switch (action.type) {
    case 'INSCRIRE_JOUEUR':
      return {
        ...partie,
        joueurs: [...state.joueurs, action.joueur]
      }

    default:
      return state
  }
}
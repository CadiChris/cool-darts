const STATE_INITIAL = {
  phase: 'INSCRIPTION',
  joueurs: [],
  peutDemarrer: false,
  scores: [],
  vainqueurs: []
}

export default function partie(state = STATE_INITIAL, action) {
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
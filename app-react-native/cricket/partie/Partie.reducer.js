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
        peutDemarrer: state.joueurs.length > 0
      }

    case 'DEMARRER_PARTIE':
      return {
        ...state,
        phase: 'EN_COURS',
        lanceur: {
          nom: state.joueurs[0],
          flechettesRestantes: 3
        }
      }

    case 'LANCER_FLECHETTE' :
      return {
        ...state,
        lanceur: {
          ...state.lanceur,
          flechettesRestantes: state.lanceur.flechettesRestantes - 1
        }
      }

    default:
      return state
  }
}
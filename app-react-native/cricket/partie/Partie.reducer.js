const LANCEUR = {
  nom: '',
  flechettesRestantes: 3,
  dernierLancer :{
    chiffre: null, touches: 0
  }
}

const stateInitial = {
  phase: 'INSCRIPTION',
  lanceur: LANCEUR,
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
          ...state.lanceur,
          nom: state.joueurs[0]
        }
      }

    case 'LANCER_FLECHETTE' :
      return {
        ...state,
        lanceur: state.lanceur.flechettesRestantes > 1
          ? {
            ...state.lanceur,
            flechettesRestantes: state.lanceur.flechettesRestantes - 1
          } : {
            ...LANCEUR,
            nom: state.joueurs[(state.joueurs.indexOf(state.lanceur.nom) + 1) % state.joueurs.length],
          }
      }

    case 'CHIFFRE' :
      const aDeja3 = state.lanceur.dernierLancer.touches === 3
      return {
        ...state,
        lanceur: {
          ...state.lanceur,
          dernierLancer: {
            chiffre: action.chiffre,
            touches: aDeja3 ? 1 : state.lanceur.dernierLancer.touches + 1
          }
        }
      }

    default:
      return state
  }
}
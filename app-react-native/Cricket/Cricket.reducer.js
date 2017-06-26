import { scoreVierge } from './TableauDesScores/arbitrage/score'
import { calculerLeNouveauScore } from './TableauDesScores/arbitrage/arbitre'
import { vainqueurs } from './TableauDesScores/arbitrage/vainqueurs'

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
        scores: [...state.scores, scoreVierge(action.joueur)],
        peutDemarrer: state.joueurs.length > 0
      }

    case 'DEMARRER_PARTIE':
      return {
        ...state,
        phase: 'EN_COURS'
      }

    case 'LANCER_FLECHETTE':
      const lancer = {
        lanceur: action.joueur,
        chiffre: action.chiffre,
        touches: action.touches
      }
      const nouveauScore = calculerLeNouveauScore(state.scores, lancer)
      const vainqueursDuNouveauScore = vainqueurs(nouveauScore)

      return {
        ...state,
        scores: nouveauScore,
        vainqueurs: vainqueursDuNouveauScore,
        phase: vainqueursDuNouveauScore.length > 0 ? 'TERMINEE' : state.phase
      }


    default:
      return state
  }
}
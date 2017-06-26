import { scoreVierge } from './arbitrage/score'
import { calculerLeNouveauScore } from './arbitrage/arbitre'

const STATE_INITIAL = {
  scores: [],
  vainqueur: null
}

export default function tableauDesScores(state = STATE_INITIAL, action) {
  switch (action.type) {

    case 'INSCRIRE_JOUEUR' :
      return {
        ...state,
        scores: [
          ...state.scores,
          scoreVierge(action.joueur)
        ]
      }

    case 'LANCER_FLECHETTE' :
      const lancer = {
        lanceur: action.joueur,
        chiffre: action.chiffre,
        touches: action.touches
      }
      return {
        ...state,
        scores: calculerLeNouveauScore(state.scores, lancer)
      }

    default:
      return state
  }
}
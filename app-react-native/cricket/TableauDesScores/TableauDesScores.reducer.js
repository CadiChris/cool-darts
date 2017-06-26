import { scoreVierge } from './arbitrage/score'
import { calculerLeNouveauScore } from './arbitrage/arbitre'
import { vainqueurs } from './arbitrage/vainqueurs'

const STATE_INITIAL = {
  scores: [],
  vainqueurs: []
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

      const scores = calculerLeNouveauScore(state.scores, lancer)
      const vainqueursSurNouveauScore = vainqueurs(scores)
      return {
        ...state,
        scores,
        vainqueurs: vainqueursSurNouveauScore
      }

    default:
      return state
  }
}
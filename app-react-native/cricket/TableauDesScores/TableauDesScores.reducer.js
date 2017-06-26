import { scoreVierge } from './arbitrage/score'
import { calculerLeNouveauScore } from './arbitrage/arbitre'

const stateInitial = {
  scores: []
}

export default function tableauDesScores(tableauDesScores = stateInitial, action) {
  switch (action.type) {

    case 'INSCRIRE_JOUEUR' :
      return {
        scores: [
          ...tableauDesScores.scores,
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
        scores: calculerLeNouveauScore(tableauDesScores.scores, lancer)
      }

    default:
      return tableauDesScores
  }
}
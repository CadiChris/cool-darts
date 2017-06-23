import { scoreVierge } from './arbitrage/score'
import { calculerLeNouveauScore } from './arbitrage/arbitre'

export default function tableauDesScores(tableauDesScores = [], action) {
  switch (action.type) {

    case 'INSCRIRE_JOUEUR' :
      return [
        ...tableauDesScores,
        scoreVierge(action.joueur)
      ]

    case 'LANCER_FLECHETTE' :
      const lancer = {
        lanceur: action.joueur,
        chiffre: action.chiffre,
        touches: action.touches
      }
      return calculerLeNouveauScore(tableauDesScores, lancer)

    default:
      return tableauDesScores
  }
}
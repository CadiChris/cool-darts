import { scoreVierge } from './arbitrage/score'
import { calculerLeNouveauScore } from './arbitrage/arbitre'

export const tableauDesScores = (tableauDesScores = [], action) => {
  switch (action.type) {

    case 'AJOUTER_JOUEUR' :
      return [
        ...tableauDesScores,
        scoreVierge(action.nomDuJoueur)
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
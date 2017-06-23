import {scoreVierge} from './arbitrage/score'

export const tableauDesScores = (tableauDesScores = [], action) => {
  switch (action.type) {

    case 'AJOUTER_JOUEUR' :
      return [
        ...tableauDesScores,
        scoreVierge(action.nomDuJoueur)
      ]

    default:
      return tableauDesScores
  }
}
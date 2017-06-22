import {scoreVierge} from '../../../domaine/arbitrage/score'


export default tableaDesScoresReducers = (tableauDesScores = [], action) => {
  switch (action.type) {

    case 'AJOUTER_JOUEUR' :
      return [
        ...tableauDesScores,
        scoreVierge(action.nomDuJoueur)
      ]

    default: return tableauDesScores
  }
}
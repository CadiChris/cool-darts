import { tableauDesScoresReducer } from './TableauDesScores.reducer'
import * as actions from './TableauDesScores.actions'

describe('reducer', () => {
  it('retourne le state initial', () => {
    expect(tableauDesScoresReducer(undefined, {})).toEqual([])
  })

  it('ajoute un joueur', () => {
    expect(tableauDesScoresReducer(undefined, actions.ajouterJoueur('J1'))).toMatchSnapshot()
  })
})
import { tableauDesScores } from './TableauDesScores.reducer'
import * as actions from './TableauDesScores.actions'

describe('reducer', () => {
  it('retourne le state initial', () => {
    expect(tableauDesScores(undefined, {})).toEqual([])
  })

  it('ajoute un joueur', () => {
    expect(tableauDesScores(undefined, actions.ajouterJoueur('J1'))).toMatchSnapshot()
  })

  it('accepte un lancer de fléchette', () => {
    const tableauDeTest = tableauDesScores(undefined, actions.ajouterJoueur('J1'))

    expect(
      tableauDesScores(tableauDeTest, actions.lancerFlechette('J1', 20, 1))
    ).toMatchSnapshot()
  })
})
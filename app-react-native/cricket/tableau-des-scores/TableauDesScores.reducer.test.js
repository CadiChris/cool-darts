import tableauDesScores from './TableauDesScores.reducer'
import { lancerFlechette } from './TableauDesScores.actions'
import { inscrireJoueur } from './../partie/Partie.actions'

describe('reducer', () => {
  it('retourne le state initial', () => {
    expect(tableauDesScores(undefined, {})).toEqual([])
  })

  it('crée un score vierge pour un nouvel inscrit', () => {
    expect(tableauDesScores(undefined, inscrireJoueur('J1'))).toMatchSnapshot()
  })

  it('accepte un lancer de fléchette', () => {
    const tableauDeTest = tableauDesScores(undefined, inscrireJoueur('J1'))

    expect(
      tableauDesScores(tableauDeTest, lancerFlechette('J1', 20, 1))
    ).toMatchSnapshot()
  })
})
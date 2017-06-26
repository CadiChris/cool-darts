import tableauDesScores from './TableauDesScores.reducer'
import { lancerFlechette } from './TableauDesScores.actions'
import { inscrireJoueur } from '../Cricket.actions'

describe('reducer', () => {
  it('retourne le state initial', () => {
    expect(tableauDesScores(undefined, {})).toMatchSnapshot()
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

  it('détecte les vainqueurs', () => {
    const toutFermeSaufLeBull = [15, 16, 17, 18, 19, 20].reduce(
      (tableau, chiffre) => (
        tableauDesScores(tableau, lancerFlechette('J1', chiffre, 3))
      ),
      tableauDesScores(undefined, inscrireJoueur('J1')))

    const fermerLeBull = lancerFlechette('J1', 25, 3)
    expect(tableauDesScores(toutFermeSaufLeBull, fermerLeBull).vainqueurs).toEqual(['J1'])
  })
})

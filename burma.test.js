import { burma } from './burma'
import { inscrireJoueur } from './burma.actions'

it('retourne le state initial', () => {
  expect(burma(undefined, {})).toMatchSnapshot()
})

it('inscrit un joueur', () => {
  expect(burma(undefined, inscrireJoueur('J1'))).toMatchSnapshot()
})
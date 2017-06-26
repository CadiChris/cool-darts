import { inscrireJoueur } from './Partie.actions'

it('inscrit un joueur', () => {
  expect(inscrireJoueur('J1')).toMatchSnapshot()
})
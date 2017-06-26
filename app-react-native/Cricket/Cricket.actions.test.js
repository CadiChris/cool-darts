import { inscrireJoueur, demarrerPartie } from './Cricket.actions'

it('inscrit un joueur', () => {
  expect(inscrireJoueur('J1')).toMatchSnapshot()
})

it('démarre la partie', () => {
  expect(demarrerPartie()).toMatchSnapshot()
})
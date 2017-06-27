import { inscrireJoueur, demarrerPartie, lancerFlechette } from './Cricket.actions'

it('inscrit un joueur', () => {
  expect(inscrireJoueur('J1')).toMatchSnapshot()
})

it('démarre la partie', () => {
  expect(demarrerPartie()).toMatchSnapshot()
})

it('lance une fléchette', () => {
  expect(lancerFlechette('J1', 20, 1)).toMatchSnapshot()
})

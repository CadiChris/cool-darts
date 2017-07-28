import { burma } from './burma'
import { inscrireJoueur, demarrerPartie } from './burma.actions'

it('retourne le state initial', () => {
  expect(burma(undefined, {})).toMatchSnapshot()
})

it('inscrit un joueur', () => {
  expect(burma(undefined, inscrireJoueur('J1'))).toMatchSnapshot()
})

it('démarre la partie', () => {
  const burma1joueur = burma(undefined, inscrireJoueur('J1'))
  const burma2joueurs = burma(burma1joueur, inscrireJoueur('J2'))

  expect(burma(burma2joueurs, demarrerPartie())).toMatchSnapshot()
})
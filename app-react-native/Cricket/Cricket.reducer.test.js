import cricket from './Cricket.reducer'
import { inscrireJoueur, demarrerPartie } from './Cricket.actions'

it('retourne le state initial', () => {
  expect(cricket(undefined, {})).toMatchSnapshot()
})

it('inscrit des joueurs', () => {
  const partieAvec1Joueur = cricket(partieDeTest(), inscrireJoueur('J1'))
  expect(partieAvec1Joueur).toMatchSnapshot()

  const partieAvec2Joueurs = cricket(partieAvec1Joueur, inscrireJoueur('J2'))
  expect(partieAvec2Joueurs).toMatchSnapshot()
})

it('démarre la partie', () => {
  const partieAvec1Joueur = cricket(partieDeTest(), inscrireJoueur('J1'))
  expect(cricket(partieAvec1Joueur, demarrerPartie())).toMatchSnapshot()
})

const partieDeTest = () => cricket(undefined, {})
import partie from './Partie.reducer'
import { inscrireJoueur, demarrerPartie } from './Partie.actions'

it('retourne le state initial', () => {
  expect(partie(undefined, {})).toMatchSnapshot()
})

it('inscrit des joueurs', () => {
  const partieAvec1Joueur = partie(partieDeTest(), inscrireJoueur('J1'))
  expect(partieAvec1Joueur).toMatchSnapshot()

  const partieAvec2Joueurs = partie(partieAvec1Joueur, inscrireJoueur('J2'))
  expect(partieAvec2Joueurs).toMatchSnapshot()
})

it('démarre la partie', () => {
  const partieAvec1Joueur = partie(partieDeTest(), inscrireJoueur('J1'))

  expect(partie(partieAvec1Joueur, demarrerPartie())).toMatchSnapshot()
})


const partieDeTest = () => partie(undefined, {})
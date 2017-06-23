import partie from './Partie.reducer'
import { inscrireJoueur, demarrerPartie } from './Partie.actions'
import { lancerFlechette } from '../tableau-des-scores/TableauDesScores.actions'

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

it('compte les fléchettes restantes', () => {
  const lanceur = {
    lanceur: {
      nom: 'J1',
      flechettesRestantes: 3
    }
  }
  expect(partie(lanceur, lancerFlechette('', 0, 0))).toEqual({lanceur: {nom: 'J1', flechettesRestantes: 2}})
})

function partieDeTest() {
  return partie(undefined, {})
}
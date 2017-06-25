import partie from './Partie.reducer'
import { inscrireJoueur, demarrerPartie } from './Partie.actions'
import { lancerFlechette, chiffre } from '../tableau-des-scores/TableauDesScores.actions'

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
  const state = {
    lanceur: {
      nom: 'J1',
      flechettesRestantes: 3
    }
  }
  expect(partie(state, lancerFlechette('', 0, 0))).toEqual({lanceur: {nom: 'J1', flechettesRestantes: 2}})
})

it('note la dernière fléchette lancée', () => {
  const state = {
    lanceur: {
      dernierLancer: {
        chiffre: null, touches: 0
      }
    }
  }

  const expectLesTouches = (lancer, touchesAttendues) => {
    expect(lancer.lanceur.dernierLancer).toEqual({chiffre: 20, touches: touchesAttendues})
  }

  const jet1 = partie(state, chiffre(20))
  const jet2 = partie(jet1, chiffre(20))
  const jet3 = partie(jet2, chiffre(20))
  const jet4 = partie(jet3, chiffre(20))

  expectLesTouches(jet1, 1)
  expectLesTouches(jet2, 2)
  expectLesTouches(jet3, 3)
  expectLesTouches(jet4, 1)
})

it('change de lanceur au dernier lancer', () => {
  const stateDuPremierLanceur = {
    joueurs: ['J1', 'J2'],
    lanceur: {
      nom: 'J1',
      flechettesRestantes: 1,
      dernierLancer: {
        chiffre: null,
        touches: 0
      }
    }
  }
  const stateDuSecondLanceur = {
    joueurs: ['J1', 'J2'],
    lanceur: {
      nom: 'J2',
      flechettesRestantes: 3,
      dernierLancer: {
        chiffre: null,
        touches: 0
      }
    }
  }
  expect(partie(stateDuPremierLanceur, lancerFlechette('', 0, 0))).toEqual(stateDuSecondLanceur)

  const stateDuSecondLanceurDerniereFlechette = {
    joueurs: ['J1', 'J2'],
    lanceur: {
      nom: 'J2',
      flechettesRestantes: 1
    }
  }
  expect(partie(stateDuSecondLanceurDerniereFlechette, lancerFlechette('', 0, 0)).lanceur.nom).toEqual('J1')
})

function partieDeTest() {
  return partie(undefined, {})
}
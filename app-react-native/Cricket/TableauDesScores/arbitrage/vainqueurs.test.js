import { vainqueurs } from './vainqueurs'
import { score } from './arbitre.test'

const _3_TOUCHES = 3

it('pas de vainqueurs si certains chiffres sont ouverts', () => {
  const seulementLe20Ferme = score('J1', {20: _3_TOUCHES}, 0)
  expect(vainqueurs([seulementLe20Ferme])).toEqual([])
})

it('déclare vainqueurs celui qui a tous ses chiffres fermés', () => {
  const seulementLe20Ferme = score('J1', {20: _3_TOUCHES}, 0)
  const toutFerme = scoreAvecCibleFermee('J2')

  expect(vainqueurs([seulementLe20Ferme, toutFerme])).toEqual(['J2'])
})

it('déclare le joueur avec le moins de pénalité comme vainqueurs', () => {
  expect(vainqueurs([
    scoreAvecCibleFermee('joueur avec pénalité', 150),
    scoreAvecCibleFermee('joueur sans pénalité', 0)
  ])).toEqual(['joueur sans pénalité'])
})

it("déclare plusieurs vainqueurs en cas d'égalité", () => {
  expect(vainqueurs([
    scoreAvecCibleFermee('J1', 30),
    scoreAvecCibleFermee('J2', 30)
  ])).toEqual(['J1', 'J2'])
})

const scoreAvecCibleFermee = function (leJoueur, saPenalite = 0) {
  return score(leJoueur, {
      20: _3_TOUCHES,
      19: _3_TOUCHES,
      18: _3_TOUCHES,
      17: _3_TOUCHES,
      16: _3_TOUCHES,
      15: _3_TOUCHES,
      25: _3_TOUCHES
    },
    saPenalite)
}
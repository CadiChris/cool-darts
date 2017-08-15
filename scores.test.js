import { scores } from './scores'
import { inscrireJoueur, volee } from './burma.actions'

it('donne des points', () => {
  const joueur = scores(undefined, inscrireJoueur('J1'))
  expect(scores(joueur, volee('J1', 15, 1))).toMatchSnapshot()
})

const VOLEE_NULLE = 0
it('divise en 2 si volée nulle', () => {
  const joueur = scores(undefined, inscrireJoueur('J1'))
  expect(
      scores(joueur, volee('J1', 15, VOLEE_NULLE))[0].points
  ).toEqual(20)
})

it('arrondi au point supérieur si besoin', () => {
  let joueur = scores(undefined, inscrireJoueur('J1'))
  joueur[0].points = 25
  expect(
      scores(joueur, volee('J1', 15, VOLEE_NULLE))[0].points
  ).toEqual(13)
})
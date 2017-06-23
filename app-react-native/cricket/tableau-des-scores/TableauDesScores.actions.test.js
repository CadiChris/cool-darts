import { lancerFlechette } from './TableauDesScores.actions'

it('lance une fléchette', () => {
  expect(lancerFlechette('J1', 20, 1)).toEqual({
    type: 'LANCER_FLECHETTE',
    joueur: 'J1',
    chiffre: 20,
    touches: 1
  })
})
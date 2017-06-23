import * as actions from './TableauDesScores.actions'

it('ajoute un joueur', () => {
  expect(actions.ajouterJoueur('J1')).toEqual({type: 'AJOUTER_JOUEUR', nomDuJoueur: 'J1'})
})

it('lance une fléchette', () => {
  expect(actions.lancerFlechette('J1', 20, 1)).toEqual({
    type: 'LANCER_FLECHETTE',
    joueur: 'J1',
    chiffre: 20,
    touches: 1
  })
})
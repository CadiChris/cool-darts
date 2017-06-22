import * as actions from './TableauDesScores.actions'

it.only('ajoute un joueur', () => {
  expect(actions.ajouterJoueur('J1')).toEqual({
    type: 'AJOUTER_JOUEUR',
    nomDuJoueur: 'J1'
  })
})
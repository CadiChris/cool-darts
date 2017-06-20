import React from 'react'
import TableauDesScores from './TableauDesScores'

export default () => (
  <div>
    <h1>Cricket</h1>
    <TableauDesScores scores={[scoreJ1, scoreJ2, scoreJ3]}/>
  </div>
)

const scoreJ1 = {
  joueur: 'Christophe',
  points: 40,
  cible: {
    15: {ferme: false, touches: 0},
    16: {ferme: false, touches: 2},
    17: {ferme: false, touches: 0},
    18: {ferme: false, touches: 1},
    19: {ferme: false, touches: 0},
    20: {ferme: true, touches: 0},
    25: {ferme: false, touches: 0},
  }
}

const scoreJ2 = {
  ...scoreJ1,
  joueur: 'Goundar',
  points: 18,
  cible: {
    ...scoreJ1.cible,
    17: {touches: 1},
    16: {touches: 0},
    20: {touches: 2, ferme: false}
  }
}

const scoreJ3 = {
  ...scoreJ1,
  joueur: 'Romain',
  points: 25,
  cible: {
    ...scoreJ1.cible,
    15: {ferme: true},
    17: {touches: 1},
    16: {touches: 0},
    18: {touches: 0},
    20: {touches: 0, ferme: false},
    25: {touches: 1}
  }
}

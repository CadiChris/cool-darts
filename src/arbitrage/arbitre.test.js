'use strict'
import assert from "assert";
import freeze from "deep-freeze";
import {scoreVierge} from "./score";
import * as arbitre from "./arbitre";

//	scores: [
//		{
//			joueur : 'J1',
//			cible : {
//				20 : {touches: 1|2|3, ferme:true|false},
//				19 : {},
//				...
//			},
//			points : 32
//		}
//		,
//		{
//			joueur: 'J2',
//			cible: {},
//			points: 0
//		}
//	]

const _0_TOUCHE = 0
const _1_TOUCHE = 1
const _2_TOUCHES = 2
const _3_TOUCHES = 3

describe('#calculerLeNouveauScore', () => {
  it('Ferme un chiffre après 3 touches', () => {
    let nouveauxScores = arbitre.calculerLeNouveauScore(
      [
        score('J1', {20: _2_TOUCHES}, 0)
      ],
      lancerDansLe(20, 'J1'))

    expect(nouveauxScores[0].cible).toMatchSnapshot()
  })

  it("N'augmente pas les touches d'un chiffre fermé", () => {
    let nouveauxScores = arbitre.calculerLeNouveauScore(
      [
        score('J1', {20: _3_TOUCHES}, 0)
      ],
      lancerDansLe(20, 'J1'))

    expect(nouveauxScores[0].cible).toMatchSnapshot()
  })

  it('Ne pénalise pas les adversaires si le lancer ne ferme pas le chiffre', () => {
    let nouveauxScores = arbitre.calculerLeNouveauScore(
      [
        score('J1', {20: _0_TOUCHE}, 0),
        score('J2', {20: _0_TOUCHE}, 0)
      ],
      lancerDansLe(20, 'J1'));

    expect(nouveauxScores).toMatchSnapshot()
  })

  it('Marque des points aux adversaires ouverts', () => {
    let nouveauxScores = arbitre.calculerLeNouveauScore(
      [
        score('J1', {20: _3_TOUCHES}, 0),
        score('J2', {20: _0_TOUCHE}, 10)
      ],
      lancerDansLe(20, 'J1'));

    assert.strictEqual(nouveauxScores[1].points, 30);
  });

  it('Ne marque pas de points aux adversaires fermés', () => {
    let nouveauxScores = arbitre.calculerLeNouveauScore(
      [
        score('J1', {20: _3_TOUCHES}, 0),
        score('J2', {20: _3_TOUCHES}, 0)
      ],
      lancerDansLe(20, 'J1'));

    assert.strictEqual(nouveauxScores[1].points, 0);
  });

  it("Préserve l'ordre des scores", () => {
    let nouveauxScores = arbitre.calculerLeNouveauScore(
      [
        score('J1', {20: _0_TOUCHE}, 0),
        score('J2', {20: _0_TOUCHE}, 0),
        score('J3', {20: _0_TOUCHE}, 0)
      ],
      lancerDansLe(20, 'J2'));

    assert.strictEqual(nouveauxScores[0].joueur, 'J1');
    assert.strictEqual(nouveauxScores[1].joueur, 'J2');
    assert.strictEqual(nouveauxScores[2].joueur, 'J3');
  })
})

function score(leJoueur, sesChiffres, sesPoints) {
  let score = Object.assign({}, scoreVierge(leJoueur), {
    points: sesPoints,
    cible: cible(sesChiffres)
  });
  freeze(score);
  return score;
}

function cible(chiffres) {
  let cible = scoreVierge().cible;
  for (const c in chiffres) {
    cible[c] = {
      touches: chiffres[c],
      ferme: chiffres[c] === _3_TOUCHES
    };
  }
  freeze(cible);
  return cible;
}

function lancerDansLe(chiffre, lanceur, touches = 1) {
  let lancer = {
    lanceur: lanceur,
    chiffre: chiffre,
    touches: touches
  };
  freeze(lancer);
  return lancer;
}
"use strict";
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

describe('arbitre', () => {
  describe('#calculerLeNouveauScore', () => {
    it('Ferme un chiffre après 3 touches', () => {
      let nouveauxScores = arbitre.calculerLeNouveauScore(
        [
          score('J1', {20: [2, false]}, 0)
        ],
        lancerDansLe(20, 'J1'));

      assert.deepEqual(nouveauxScores[0].cible, cible({20: [3, true]}));
    });

    it("N'augmente pas les touches d'un chiffre fermé", () => {
      let nouveauxScores = arbitre.calculerLeNouveauScore(
        [
          score('J1', {20: [3, true]}, 0)
        ],
        lancerDansLe(20, 'J1'));

      assert.deepEqual(nouveauxScores[0].cible, cible({20: [3, true]}));
    });

    it('Ne pénalise pas les adversaires si le lancer ne ferme pas le chiffre', () => {
      let nouveauxScores = arbitre.calculerLeNouveauScore(
        [
          score('J1', {20: [0, false]}, 0),
          score('J2', {20: [0, false]}, 0)
        ],
        lancerDansLe(20, 'J1'));

      assert.deepEqual(nouveauxScores, [
        score('J1', {20: [1, false]}, 0),
        score('J2', {20: [0, false]}, 0)
      ]);
    });

    it('Marque des points aux adversaires ouverts', () => {
      let nouveauxScores = arbitre.calculerLeNouveauScore(
        [
          score('J1', {20: [3, true]}, 0),
          score('J2', {20: [0, false]}, 10)
        ],
        lancerDansLe(20, 'J1'));

      assert.strictEqual(nouveauxScores[1].points, 30);
    });

    it('Ne marque pas de points aux adversaires fermés', () => {
      let nouveauxScores = arbitre.calculerLeNouveauScore(
        [
          score('J1', {20: [3, true]}, 0),
          score('J2', {20: [3, true]}, 0)
        ],
        lancerDansLe(20, 'J1'));

      assert.strictEqual(nouveauxScores[1].points, 0);
    });

    it("Préserve l'ordre des scores", () => {
      let nouveauxScores = arbitre.calculerLeNouveauScore(
        [
          score('J1', {20: [0, false]}, 0),
          score('J2', {20: [0, false]}, 0),
          score('J3', {20: [0, false]}, 0)
        ],
        lancerDansLe(20, 'J2'));

      assert.strictEqual(nouveauxScores[0].joueur, 'J1');
      assert.strictEqual(nouveauxScores[1].joueur, 'J2');
      assert.strictEqual(nouveauxScores[2].joueur, 'J3');
    });
  });
});

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
      touches: chiffres[c][0],
      ferme: chiffres[c][1]
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
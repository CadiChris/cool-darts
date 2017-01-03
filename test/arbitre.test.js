"use strict";
let assert = require('assert');
let freeze = require('deep-freeze');
let arbitre = require('../src/arbitre');

//	scores: [
//		{
//			joueur : 'J1',
//			cible : {
//				20 : {impacts: 1|2|3, ferme:true|false},
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

describe('Arbitre', () => {
  describe('#scorer', () => {
	it('Ferme un chiffre après 3 impacts', () => {
		let nouveauxScores = arbitre.scorer(
				[
					score('J1', cible({20: [2, false]}), 0)
				],
				lancerDansLe(20, 'J1'));
		
		assert.deepEqual(nouveauxScores[0].cible, cible({20: [3, true]}));
	});
	
 	it("N'impacte pas un chiffre fermé", () => {
		let nouveauxScores  = arbitre.scorer(
				[
					score('J1', cible({20: [3, true]}), 0)
				],
				lancerDansLe(20, 'J1'));
		
		assert.deepEqual(nouveauxScores[0].cible, cible({20: [3, true]}));
	});
	
	it('Ne pénalise pas les adversaires si le lancer ne ferme pas le chiffre', () => {
		let nouveauxScores = arbitre.scorer(
				[
					score('J1', cible({20: [0, false]}), 0),
					score('J2', cible({20: [0, false]}), 0)
				],
				lancerDansLe(20, 'J1'));
		
		assert.deepEqual(nouveauxScores, [
				score('J1', cible({20: [1, false]}), 0),
				score('J2', cible({20: [0, false]}), 0)
		]);
	});
	
	it('Marque des points aux adversaires ouverts', () => {
		let nouveauxScores = arbitre.scorer(
				[
					score('J1', cible({20: [3, true]}), 0),
					score('J2', cible({20: [0, false]}), 10)
				],
				lancerDansLe(20, 'J1'));
				
		assert.strictEqual(nouveauxScores[1].points, 30);
				
	});
	
	it('Ne marque pas de points aux adversaires fermés', () => {
		let nouveauxScores = arbitre.scorer(
				[
					score('J1', cible({20: [3, true]}), 0),
					score('J2', cible({20: [3, true]}), 0)
				],
				lancerDansLe(20, 'J1'));
				
		assert.strictEqual(nouveauxScores[1].points, 0);
	});
	
	it("Préserve l'ordre des scores", () => {
		let nouveauxScores = arbitre.scorer(
				[
					score('J1', cible({20: [0, false]}), 0),
					score('J2', cible({20: [0, false]}), 0),
					score('J3', cible({20: [0, false]}), 0)
				],
				lancerDansLe(20, 'J2'));
		
		assert.strictEqual(nouveauxScores[0].joueur, 'J1');
		assert.strictEqual(nouveauxScores[1].joueur, 'J2');
		assert.strictEqual(nouveauxScores[2].joueur, 'J3');
	});
  });
});


function lancerDansLe(chiffre, lanceur, impacts = 1) {
	let lancer = {
		lanceur: lanceur,
		chiffre: chiffre,
		impacts: impacts
	};
	freeze(lancer);
	return lancer;
}

function cible(chiffres) {
	let cible = {};
	for (const c in chiffres) {
		cible[c] = {
			impacts: chiffres[c][0],
			ferme: chiffres[c][1]
		};
	}
	freeze(cible);
	return cible;
}

function score(leJoueur, saCible, sesPoints) {
	let score = {
		joueur: leJoueur,
		cible: saCible,
		points: sesPoints
	};
	freeze(score);
	return score;
}

"use strict";
import assert from 'assert';
import freeze from 'deep-freeze';
import scoreVierge from './scoreVierge';

describe('score.modele', () => {
	it('crée un score vierge', () => {
		let scoreViergeJ1 = scoreVierge('J1');
		
		assert.deepEqual(scoreViergeJ1, {
			joueur : 'J1',
			points: 0,
			cible: {
				15: { touches: 0, ferme: false},
				16: { touches: 0, ferme: false},
				17: { touches: 0, ferme: false},
				18: { touches: 0, ferme: false},
				19: { touches: 0, ferme: false},
				20: { touches: 0, ferme: false},
				25: { touches: 0, ferme: false}
			}
		});
	});
	
	it('créé un nouveau score à chaque appel', () => {
		assert.notStrictEqual(scoreVierge(''), scoreVierge(''));
	});
});
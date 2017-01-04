'use striict';

export default function (joueur) {
	return {
		joueur: joueur,
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
	};
}
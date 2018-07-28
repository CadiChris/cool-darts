import freeze from "deep-freeze";
import { scoreVierge } from "./score";
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

const _0_TOUCHE = 0;
const _1_TOUCHE = 1;
const _2_TOUCHES = 2;
const _3_TOUCHES = 3;

describe("Arbitre", () => {
  describe("Fermeture d'un chiffre", () => {
    it("Ferme un chiffre après 3 touches", () => {
      const apres3TouchesDansUnChiffre = arbitre.calculerLeNouveauScore(
        [score("J1", { 20: _2_TOUCHES }, 0)],
        lancerDansLe(20, "J1")
      );

      const chiffreFerme = { touches: 3, ferme: true };

      expect(apres3TouchesDansUnChiffre[0].cible[20]).toEqual(chiffreFerme);
    });

    it("N'augmente pas les touches d'un chiffre fermé", () => {
      const apresToucheDansUnChiffreDejaFerme = arbitre.calculerLeNouveauScore(
        [score("J1", { 20: _3_TOUCHES }, 0)],
        lancerDansLe(20, "J1")
      );

      expect(apresToucheDansUnChiffreDejaFerme[0].cible[20].touches).toEqual(
        _3_TOUCHES
      );
    });
  });

  describe("Calcul des pénalités", () => {
    it("Ne pénalise pas les adversaires si le lancer ne ferme pas le chiffre", () => {
      const nouveauxScores = arbitre.calculerLeNouveauScore(
        [score("J1", { 20: _0_TOUCHE }, 0), score("J2", { 20: _0_TOUCHE }, 0)],
        lancerDansLe(20, "J1")
      );

      const scoreDeJ2 = nouveauxScores[1];

      expect(scoreDeJ2.points).toEqual(0);
    });

    it("Pénalise les adversaires ouverts si un chiffre fermé est touché", () => {
      const penaliteDeJ2 = 10;

      const nouveauxScores = arbitre.calculerLeNouveauScore(
        [
          score("J1", { 20: _3_TOUCHES }, 0),
          score("J2", { 20: _0_TOUCHE }, penaliteDeJ2)
        ],
        lancerDansLe(20, "J1")
      );

      expect(nouveauxScores[1].points).toBe(penaliteDeJ2 + 20);
    });

    it("Ne pénalise pas les adversaires ayant le chiffre fermé", () => {
      const nouveauxScores = arbitre.calculerLeNouveauScore(
        [
          score("J1", { 20: _3_TOUCHES }, 0),
          score("J2", { 20: _3_TOUCHES }, 0)
        ],
        lancerDansLe(20, "J1")
      );

      expect(nouveauxScores[1].points).toBe(0);
    });
  });

  describe("Gestion de la partie", () => {
    it("Ne fait rien en cas de coup manqué", () => {
      const chiffreInvalide = 3;

      const nouveauxScores = arbitre.calculerLeNouveauScore(
        [score("J1", { 20: _0_TOUCHE }, 0)],
        lancerDansLe(chiffreInvalide, "J1")
      );

      expect(nouveauxScores).toEqual([score("J1", { 20: _0_TOUCHE }, 0)]);
    });

    it("Préserve l'ordre des scores", () => {
      const nouveauxScores = arbitre.calculerLeNouveauScore(
        [
          score("J1", { 20: _0_TOUCHE }, 0),
          score("J2", { 20: _0_TOUCHE }, 0),
          score("J3", { 20: _0_TOUCHE }, 0)
        ],
        lancerDansLe(20, "J2")
      );

      expect(nouveauxScores[0].joueur).toBe("J1");
      expect(nouveauxScores[1].joueur).toBe("J2");
      expect(nouveauxScores[2].joueur).toBe("J3");
    });
  });
});

export function score(leJoueur, sesChiffres, sesPoints) {
  const score = {
    ...scoreVierge(leJoueur),
    points: sesPoints,
    cible: cible(sesChiffres)
  };
  freeze(score);
  return score;
}

function cible(chiffres) {
  const cible = scoreVierge().cible;
  for (const c in chiffres) {
    cible[c] = {
      touches: chiffres[c],
      ferme: chiffres[c] === _3_TOUCHES
    };
  }
  freeze(cible);
  return cible;
}

function lancerDansLe(chiffre, lanceur, touches = _1_TOUCHE) {
  const lancer = {
    lanceur: lanceur,
    chiffre: chiffre,
    touches: touches
  };
  freeze(lancer);
  return lancer;
}

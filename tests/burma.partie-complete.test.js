import deepFreeze from "deep-freeze";
import { burma } from "../burma";
import {
  inscrireJoueur,
  demarrerPartie,
  voleeSurChiffre,
  voleeSurDouble,
  voleeSurTriple,
  voleeSurBull
} from "../actions";
import { POINTS_INITIAUX } from "../Score";

describe("partie complète de Burma", () => {
  it("arbitre une partie complète", () => {
    //             == J1 ==              |       == J2 ==
    // 15 |  0     ->   /2  ->  20 pts   |  2    -> +30  ->  70 pts
    // 16 |  1     ->  +16  ->  36 pts   |  4    -> +64  -> 134 pts
    // D  |  2x20  ->  +80  -> 116 pts   |  0    ->  /2  ->  67 pts
    // 17 |  0     ->   /2  ->  58 pts   |  2    -> +34  -> 101 pts
    // 18 |  3     ->  +54  -> 112 pts   |  1    -> +18  -> 119 pts
    // T  |  3x20  -> +180  -> 292 pts   |  0    ->  /2  ->  60 pts
    // 19 |  0     ->   /2  -> 146 pts   |  2    -> +38  ->  98 pts
    // 20 |  2     ->  +40  -> 186 pts   |  1    -> +20  -> 118 pts
    // B  |  0, 0  ->   /2  ->  93 pts   |  2, 0 -> +50  -> 168 pts

    const partieComplete = executer([
      inscrireJoueur("J1"),
      inscrireJoueur("J2"),
      demarrerPartie(),
      voleeSurChiffre("J1", "15", 0),
      voleeSurChiffre("J2", "15", 2),
      voleeSurChiffre("J1", "16", 1),
      voleeSurChiffre("J2", "16", 4),
      voleeSurDouble("J1", ["20", "20"]),
      voleeSurDouble("J2", []),
      voleeSurChiffre("J1", "17", 0),
      voleeSurChiffre("J2", "17", 2),
      voleeSurChiffre("J1", "18", 3),
      voleeSurChiffre("J2", "18", 1),
      voleeSurTriple("J1", ["20", "20", "20"]),
      voleeSurTriple("J2", []),
      voleeSurChiffre("J1", "19", 0),
      voleeSurChiffre("J2", "19", 2),
      voleeSurChiffre("J1", "20", 2),
      voleeSurChiffre("J2", "20", 1),
      voleeSurBull("J1", 0, 0),
      voleeSurBull("J2", 2, 0)
    ]);

    const joueurAyantLePlusDePoints = "J2";

    expect(partieComplete).toEqual({
      phase: "TERMINEE",
      joueurs: ["J1", "J2"],
      vainqueur: joueurAyantLePlusDePoints,
      chiffreCourant: undefined,
      lanceur: undefined,
      scores: {
        J1: [
          { contrat: "DEPART", points: POINTS_INITIAUX },
          { contrat: "15", points: 20 },
          { contrat: "16", points: 36 },
          { contrat: "DOUBLE", points: 116 },
          { contrat: "17", points: 58 },
          { contrat: "18", points: 112 },
          { contrat: "TRIPLE", points: 292 },
          { contrat: "19", points: 146 },
          { contrat: "20", points: 186 },
          { contrat: "BULL", points: 93 }
        ],
        J2: [
          { contrat: "DEPART", points: POINTS_INITIAUX },
          { contrat: "15", points: 70 },
          { contrat: "16", points: 134 },
          { contrat: "DOUBLE", points: 67 },
          { contrat: "17", points: 101 },
          { contrat: "18", points: 119 },
          { contrat: "TRIPLE", points: 60 },
          { contrat: "19", points: 98 },
          { contrat: "20", points: 118 },
          { contrat: "BULL", points: 168 }
        ]
      }
    });
  });
});

const executer = actions =>
  actions.reduce((state, action) => {
    const nextState = burma(state, action);
    deepFreeze(nextState);
    return nextState;
  }, undefined);

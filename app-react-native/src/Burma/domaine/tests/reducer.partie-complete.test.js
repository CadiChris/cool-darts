import deepFreeze from "deep-freeze";
import burma from "../reducer";
import {
  demarrerBurma,
  voleeSurChiffre,
  voleeSurDouble,
  voleeSurTriple
} from "../actions";
import { POINTS_INITIAUX } from "../arbitrage/Score";

describe("partie complète de Burma", () => {
  it("arbitre une partie complète", () => {
    //             == J1 ==              |       == J2 ==
    // 15 |  0     ->   /2  ->  20 pts   |  2    -> +30  ->  70 pts
    // 16 |  1     ->  +16  ->  36 pts   |  4    -> +64  -> 134 pts
    // D  |  2x20  ->  +80  -> 116 pts   |  0    ->  /2  ->  67 pts
    // 17 |  0     ->   /2  ->  58 pts   |  2    -> +34  -> 101 pts
    // 18 |  3     ->  +54  -> 112 pts   |  1    -> +18  -> 119 pts
    // T  |  2x20  -> +120  -> 232 pts   |  0    ->  /2  ->  60 pts
    // 19 |  0     ->   /2  -> 116 pts   |  2    -> +38  ->  98 pts
    // 20 |  2     ->  +40  -> 156 pts   |  1    -> +20  -> 118 pts
    // B  |  0     ->   /2  ->  78 pts   |  2    -> +50  -> 168 pts

    const partieComplete = executer([
      demarrerBurma(["J1", "J2"]),
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
      voleeSurTriple("J1", ["20", "20"]),
      voleeSurTriple("J2", []),
      voleeSurChiffre("J1", "19", 0),
      voleeSurChiffre("J2", "19", 2),
      voleeSurChiffre("J1", "20", 2),
      voleeSurChiffre("J2", "20", 1),
      voleeSurChiffre("J1", "25", 0),
      voleeSurChiffre("J2", "25", 2)
    ]);

    const joueurAyantLePlusDePoints = "J2";

    expect(partieComplete).toEqual({
      vainqueur: joueurAyantLePlusDePoints,
      chiffreCourant: undefined,
      lanceur: undefined,
      scores: {
        J1: [
          { contrat: "DEPART", points: POINTS_INITIAUX },
          { contrat: "15", points: 20, delta: -20, touches: [] },
          { contrat: "16", points: 36, delta: 16, touches: ["16"] },
          { contrat: "DOUBLE", points: 116, delta: 80, touches: ["20", "20"] },
          { contrat: "17", points: 58, delta: -58, touches: [] },
          {
            contrat: "18",
            points: 112,
            delta: 54,
            touches: ["18", "18", "18"]
          },
          { contrat: "TRIPLE", points: 232, delta: 120, touches: ["20", "20"] },
          { contrat: "19", points: 116, delta: -116, touches: [] },
          { contrat: "20", points: 156, delta: 40, touches: ["20", "20"] },
          { contrat: "25", points: 78, delta: -78, touches: [] }
        ],
        J2: [
          { contrat: "DEPART", points: POINTS_INITIAUX },
          { contrat: "15", points: 70, delta: 30, touches: ["15", "15"] },
          {
            contrat: "16",
            points: 134,
            delta: 64,
            touches: ["16", "16", "16", "16"]
          },
          { contrat: "DOUBLE", points: 67, delta: -67, touches: [] },
          { contrat: "17", points: 101, delta: 34, touches: ["17", "17"] },
          { contrat: "18", points: 119, delta: 18, touches: ["18"] },
          { contrat: "TRIPLE", points: 60, delta: -59, touches: [] },
          { contrat: "19", points: 98, delta: 38, touches: ["19", "19"] },
          { contrat: "20", points: 118, delta: 20, touches: ["20"] },
          { contrat: "25", points: 168, delta: 50, touches: ["25", "25"] }
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

import deepFreeze from "deep-freeze";
import burma from "../burma";
import {
  inscrireJoueur,
  demarrerPartie,
  voleeSurBull,
  voleeSurChiffre,
  voleeSurDouble,
  voleeSurTriple
} from "../actions";
import { POINTS_INITIAUX } from "../Score";

it("retourne le state initial", () => {
  expect(burma(undefined, {})).toEqual({
    chiffreCourant: undefined,
    joueurs: [],
    lanceur: undefined,
    phase: "INSCRIPTION",
    vainqueur: undefined,
    scores: {}
  });
});

it("inscrit un joueur", () => {
  const unJoueurInscrit = executer([inscrireJoueur("J1")]);
  expect(unJoueurInscrit).toEqual({
    chiffreCourant: undefined,
    joueurs: ["J1"],
    lanceur: undefined,
    phase: "INSCRIPTION",
    scores: {
      J1: [{ contrat: "DEPART", points: POINTS_INITIAUX }]
    }
  });
});

it("démarre la partie", () => {
  const burmaEnCoursAvec2joueurs = executer([
    inscrireJoueur("J1"),
    inscrireJoueur("J2"),
    demarrerPartie()
  ]);

  expect(burmaEnCoursAvec2joueurs).toEqual({
    chiffreCourant: "15",
    joueurs: ["J1", "J2"],
    lanceur: "J1",
    phase: "EN_COURS",
    scores: {
      J1: [{ contrat: "DEPART", points: POINTS_INITIAUX }],
      J2: [{ contrat: "DEPART", points: POINTS_INITIAUX }]
    },
    vainqueur: undefined
  });
});

describe("fin de la partie", () => {
  it("ne termine pas la partie tant que les lanceurs n'ont pas joué le contrat du BULL", () => {
    const burmaEnCours = executer([
      inscrireJoueur("J1"),
      demarrerPartie(),
      voleeSurChiffre("J1", 15, 0),
      voleeSurChiffre("J1", 16, 0)
    ]);

    expect(burmaEnCours.phase).toBe("EN_COURS");
  });

  it("termine la partie après le contrat du BULL du dernier lanceur", () => {
    const toutesLesVoleesDuBurma = [
      voleeSurChiffre("J1", 15, 0),
      voleeSurChiffre("J1", 16, 0),
      voleeSurDouble("J1", []),
      voleeSurChiffre("J1", 17, 0),
      voleeSurChiffre("J1", 18, 0),
      voleeSurTriple("J1", []),
      voleeSurChiffre("J1", 19, 0),
      voleeSurChiffre("J1", 20, 0),
      voleeSurBull("J1", 0, 0)
    ];

    const burmaTermine = executer([
      inscrireJoueur("J1"),
      demarrerPartie(),
      ...toutesLesVoleesDuBurma
    ]);

    expect(burmaTermine.phase).toBe("TERMINEE");
  });
});

const executer = actions =>
  actions.reduce((state, action) => {
    const nextState = burma(state, action);
    deepFreeze(nextState);
    return nextState;
  }, undefined);

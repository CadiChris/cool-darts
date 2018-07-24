import deepFreeze from "deep-freeze";
import { burma } from "./burma";
import { inscrireJoueur, demarrerPartie, voleeSurBull } from "./actions";
import { POINTS_INITIAUX } from "./Score";

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

it("termine la partie après la dernière volée du dernier joueur", () => {
  const derniereVoleeDuDernierJoueur = voleeSurBull("J2", 1, 0);
  const burmaTermine = executer([
    inscrireJoueur("J1"),
    inscrireJoueur("J2"),
    demarrerPartie(),
    derniereVoleeDuDernierJoueur
  ]);

  expect(burmaTermine.phase).toBe("TERMINEE");

  const joueurAyantLePlusDePoints = "J2";
  expect(burmaTermine.vainqueur).toBe(joueurAyantLePlusDePoints);
});

const executer = actions =>
  actions.reduce((state, action) => {
    const nextState = burma(state, action);
    deepFreeze(nextState);
    return nextState;
  }, undefined);

import deepFreeze from "deep-freeze";
import { POINTS_INITIAUX, scores } from "./scores";
import {
  inscrireJoueur,
  voleeChiffree,
  voleeSurDouble,
  voleeSurTriple
} from "./actions";

it("donne des points", () => {
  const joueurFaitUnQuinze = executer([
    inscrireJoueur("J1"),
    voleeChiffree("J1", 15, 1)
  ]);

  expect(joueurFaitUnQuinze[0]).toEqual({
    joueur: "J1",
    points: POINTS_INITIAUX + 15,
    touches: {
      15: [{ chiffre: 15, nombre: 1 }]
    }
  });
});

const VOLEE_NULLE = 0;
it("divise en 2 si volée nulle", () => {
  const joueurLanceUneVoleeNulle = executer([
    inscrireJoueur("J1"),
    voleeChiffree("J1", 15, VOLEE_NULLE)
  ]);

  expect(joueurLanceUneVoleeNulle[0].points).toEqual(20);
});

it("arrondi au point supérieur si besoin", () => {
  const scoreArrondi = executer([
    inscrireJoueur("J1"),
    voleeChiffree("J1", 15, 1), // Arrive à 55 points
    voleeChiffree("J1", 16, VOLEE_NULLE)
  ]);
  const cinquanteCinqDiviseParDeuxArrondi = 28;
  expect(scoreArrondi[0].points).toEqual(cinquanteCinqDiviseParDeuxArrondi);
});

it("gère le rang des doubles", () => {
  const scoreApresDouble = executer([
    inscrireJoueur("J1"),
    voleeSurDouble("J1", [
      { chiffre: 20, nombre: 2 },
      { chiffre: 1, nombre: 4 }
    ])
  ]);

  expect(scoreApresDouble[0].points).toBe(POINTS_INITIAUX + 2 * 20 + 4 * 1);
});

it("gère le rang triple", () => {
  const scoreApresTriple = executer([
    inscrireJoueur("J1"),
    voleeSurTriple("J1", [
      { chiffre: 20, nombre: 3 },
      { chiffre: 1, nombre: 3 }
    ])
  ]);

  expect(scoreApresTriple[0].points).toBe(POINTS_INITIAUX + 3 * 20 + 3 * 1);
});

it("divise les points par 2 si le joueur fait un 0 sur les doubles", () => {
  const scoreApres0AuDouble = executer([
    inscrireJoueur("J1"),
    voleeSurDouble("J1", [])
  ]);

  expect(scoreApres0AuDouble[0].points).toBe(POINTS_INITIAUX / 2);
});

const executer = actions =>
  actions.reduce((state, action) => {
    const nextState = scores(state, action);
    deepFreeze(nextState);
    return nextState;
  }, undefined);

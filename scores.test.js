import { scores } from "./scores";
import {
  inscrireJoueur,
  voleeChiffree,
  voleeSurDouble,
  voleeSurTriple
} from "./burma.actions";

it("donne des points", () => {
  const joueur = scores(undefined, inscrireJoueur("J1"));
  expect(scores(joueur, voleeChiffree("J1", 15, 1))).toMatchSnapshot();
});

const VOLEE_NULLE = 0;
it("divise en 2 si volée nulle", () => {
  const score = scores(undefined, inscrireJoueur("J1"));
  expect(scores(score, voleeChiffree("J1", 15, VOLEE_NULLE))[0].points).toEqual(
    20
  );
});

it("arrondi au point supérieur si besoin", () => {
  let score = scores(undefined, inscrireJoueur("J1"));
  score[0].points = 25;
  expect(scores(score, voleeChiffree("J1", 15, VOLEE_NULLE))[0].points).toEqual(
    13
  );
});

it("gère le rang des doubles", () => {
  let score = scores(undefined, inscrireJoueur("J1"));
  score = scores(score, voleeChiffree("J1", 15, 1));
  score = scores(score, voleeChiffree("J1", 16, 1));
  score = scores(
    score,
    voleeSurDouble("J1", [
      { chiffre: 20, nombre: 2 },
      { chiffre: 1, nombre: 4 }
    ])
  );

  expect(score[0].points).toBe(40 + 15 + 16 + 2 * 20 + 4 * 1);
});

it("gère le rang triple", () => {
  let score = scores(undefined, inscrireJoueur("J1"));
  score = scores(
    score,
    voleeSurTriple("J1", [
      { chiffre: 20, nombre: 3 },
      { chiffre: 1, nombre: 3 }
    ])
  );
  expect(score[0].points).toBe(40 + 3 * 20 + 3 * 1);
});

it("gère un 0 sur les doubles", () => {
  let score = scores(undefined, inscrireJoueur("J1"));
  score = scores(score, voleeSurDouble("J1", []));

  expect(score[0].points).toBe(20);
});

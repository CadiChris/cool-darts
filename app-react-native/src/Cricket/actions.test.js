import {
  inscrireJoueur,
  demarrerPartie,
  lancerFlechette,
  nouvellePartie
} from "./actions";

it("inscrit un joueur", () => {
  expect(inscrireJoueur("J1")).toMatchSnapshot();
});

it("démarre la partie", () => {
  expect(demarrerPartie()).toMatchSnapshot();
});

it("lance une fléchette", () => {
  expect(lancerFlechette("J1", 20, 1)).toMatchSnapshot();
});

it("crée une nouvelle partie", () => {
  expect(nouvellePartie()).toMatchSnapshot();
});

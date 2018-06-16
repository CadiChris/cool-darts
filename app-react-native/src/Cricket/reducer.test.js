import cricket from "./reducer";
import {
  inscrireJoueur,
  demarrerPartie,
  lancerFlechette,
  nouvellePartie
} from "./actions";

it("retourne le state initial", () => {
  expect(cricket(undefined, {})).toMatchSnapshot();
});

it("inscrit des joueurs", () => {
  expect(partieAvec1Joueur("J1")).toMatchSnapshot();
  expect(
    cricket(partieAvec1Joueur("J1"), inscrireJoueur("J2"))
  ).toMatchSnapshot();
});

it("démarre la partie", () => {
  expect(cricket(partieAvec1Joueur("J1"), demarrerPartie())).toMatchSnapshot();
});

it("modifie le score sur un lancer de fléchette", () => {
  expect(
    cricket(partieAvec1Joueur("J1"), lancerFlechette("J1", 20, 1))
  ).toMatchSnapshot();
});

it("met fin à la partie sur le lancer qui désigne le vainqueur", () => {
  const toutFermeSaufLeBull = [15, 16, 17, 18, 19, 20].reduce(
    (tableau, chiffre) => cricket(tableau, lancerFlechette("J1", chiffre, 3)),
    partieAvec1Joueur("J1")
  );

  const fermerLeBull = lancerFlechette("J1", 25, 3);
  const partieTerminee = cricket(toutFermeSaufLeBull, fermerLeBull);

  expect(partieTerminee.vainqueurs).toEqual(["J1"]);
  expect(partieTerminee.phase).toEqual("TERMINEE");
});

it("recrée une nouvelle partie", () => {
  const partieDemarree = cricket(partieAvec1Joueur("J1"), demarrerPartie());
  expect(cricket(partieDemarree, nouvellePartie())).toMatchSnapshot();
});

const partieAvec1Joueur = joueur =>
  cricket(partieVide(), inscrireJoueur(joueur));
const partieVide = () => cricket(undefined, {});

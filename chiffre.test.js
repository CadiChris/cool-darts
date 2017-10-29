import { leChiffreSuivant } from "./chiffre";

const joueurs = ["J1", "J2"];

it("ne change pas de chiffre s'il reste des lanceurs", () => {
  const lanceur = "J1";
  expect(leChiffreSuivant(15).avec(joueurs, lanceur)).toBe(15);
});

it("change de chiffre au dernier lanceur", () => {
  const lanceur = "J2";
  expect(leChiffreSuivant(15).avec(joueurs, lanceur)).toBe(16);
});

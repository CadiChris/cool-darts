import { prochainChiffre } from "./chiffreCourant";

const joueurs = ["J1", "J2"];

it("ne change pas de chiffre s'il reste des lanceurs", () => {
  const lanceur = "J1";
  expect(prochainChiffre(15, joueurs, lanceur)).toBe(15);
});

it("change de chiffre au dernier lanceur", () => {
  const lanceur = "J2";
  expect(prochainChiffre(15, joueurs, lanceur)).toBe(16);
});

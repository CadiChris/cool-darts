import * as lanceur from "./lanceur";

it("retourne le joueur suivant", () => {
  const joueurs = ["J1", "J2"];
  expect(lanceur.suivant(joueurs, "J1")).toBe("J2");
});

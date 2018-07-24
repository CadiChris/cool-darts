import { lanceurSuivant } from "./lanceur";

it("retourne le lanceur suivant", () => {
  const joueurs = ["J1", "J2"];
  expect(lanceurSuivant("J1", joueurs)).toBe("J2");
  expect(lanceurSuivant("J2", joueurs)).toBe("J1");
});

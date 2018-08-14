import { elementPrecedent, elementSuivant } from "../tableau";

describe("tableau", () => {
  const joueurs = ["J1", "J2"];

  it("retourne l'élément suivant en revenant au début après la fin", () => {
    expect(elementSuivant("J1", joueurs)).toBe("J2");
    expect(elementSuivant("J2", joueurs)).toBe("J1");
  });

  it("retour l'élément précédent en repartant à la fin si le début est atteint", () => {
    expect(elementPrecedent("J2", joueurs)).toBe("J1");
    expect(elementPrecedent("J1", joueurs)).toBe("J2");
  });
});

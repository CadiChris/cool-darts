import Contrats from "../Contrats";

describe("Les contrats", () => {
  describe("sur un chiffre", () => {
    test("la valeur du contrat est la valeur du chiffre", () => {
      expect(new Contrats.chiffre(20, 2).valeur).toBe(20 * 2);
    });

    test("le nom du contrat est le chiffre", () => {
      expect(new Contrats.chiffre(18, 1).nom).toBe("18");
    });

    it("le contrat est raté si le chiffre n'est pas touché", () => {
      const aucuneTouche = 0;
      expect(new Contrats.chiffre(15, aucuneTouche).estRempli).toBe(false);
    });
  });

  describe("sur les Doubles", () => {
    test("la valeur du contrat est le double des chiffres touchés", () => {
      expect(new Contrats.double([16, 13]).valeur).toBe(16 * 2 + 13 * 2);
    });

    it("le nom du contrat est 'DOUBLE'", () => {
      expect(new Contrats.double([5]).nom).toBe("DOUBLE");
    });

    it("le contrat est raté si aucun chiffre n'est touché", () => {
      const aucunChiffre = [];
      expect(new Contrats.double(aucunChiffre).estRempli).toBe(false);
    });
  });

  describe("sur les Triples", () => {
    it("la valeur du contrat est le triple des chiffres touchés", () => {
      expect(new Contrats.triple([20]).valeur).toBe(20 * 3);
    });

    it("le nom du contrat est 'TRIPLE'", () => {
      expect(new Contrats.triple([9]).nom).toBe("TRIPLE");
    });

    it("le contrat est raté si aucun chiffre n'est touché", () => {
      const aucunChiffre = [];
      expect(new Contrats.triple(aucunChiffre).estRempli).toBe(false);
    });
  });

  describe("sur le Bull", () => {
    it("la valeur du contrat est 25 pour chaque simple Bull et 50 pour chaque double Bull", () => {
      const unSimpleBull = 1;
      const unDoubleBull = 1;

      const contratUnDeChaque = new Contrats.bull(unSimpleBull, unDoubleBull);

      expect(contratUnDeChaque.valeur).toBe(25 + 50);
    });

    it("le nom du contrat est `BULL`", () => {
      expect(new Contrats.bull(1, 0).nom).toBe("BULL");
    });

    it("le contrat est raté si le bull n'est pas touché du tout", () => {
      const aucunSimpleBull = 0;
      const aucunDoubleBull = 0;

      const contratAucunBull = new Contrats.bull(
        aucunSimpleBull,
        aucunDoubleBull
      );

      expect(contratAucunBull.estRempli).toBe(false);

      expect(new Contrats.bull(2, 0).estRempli).toBe(true);
      expect(new Contrats.bull(0, 1).estRempli).toBe(true);
    });
  });
});

import Contrats from "../Contrats";

describe("Les contrats", () => {
  describe("sur un chiffre", () => {
    it("la valeur du contrat est la valeur du chiffre", () => {
      expect(new Contrats.chiffre(20, 2).valeur).toBe(20 * 2);
    });

    it("le nom du contrat est le chiffre", () => {
      expect(new Contrats.chiffre(18, 1).nom).toBe("18");
    });

    it("le contrat est raté si le chiffre n'est pas touché", () => {
      const aucuneTouche = 0;
      expect(new Contrats.chiffre(15, aucuneTouche).estRempli).toBe(false);
    });

    it("les touches du contrat sont le nombre de touches", () => {
      expect(Contrats.chiffre(17, 2).touches).toEqual([17, 17]);
    });

    it("les touches sont videos si le chiffre n'est pas touché", () => {
      expect(Contrats.chiffre(16, 0).touches).toEqual([]);
    });
  });

  describe("sur les Doubles", () => {
    it("la valeur du contrat est le double des chiffres touchés", () => {
      expect(new Contrats.double([16, 13]).valeur).toBe(16 * 2 + 13 * 2);
    });

    it("le nom du contrat est 'DOUBLE'", () => {
      expect(new Contrats.double([5]).nom).toBe("DOUBLE");
    });

    it("le contrat est raté si aucun chiffre n'est touché", () => {
      const aucunChiffre = [];
      expect(new Contrats.double(aucunChiffre).estRempli).toBe(false);
    });

    it("les touches du contrat double sont les chiffres touchés", () => {
      expect(Contrats.double([15, 16]).touches).toEqual([15, 16]);
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

    it("les touches du contrat triple sont les chiffres touchés", () => {
      expect(Contrats.triple([20]).touches).toEqual([20]);
    });
  });
});

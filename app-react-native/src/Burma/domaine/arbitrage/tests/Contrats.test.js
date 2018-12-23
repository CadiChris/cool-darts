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
});

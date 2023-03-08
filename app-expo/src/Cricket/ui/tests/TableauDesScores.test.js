import { integreTouche } from "../Cricket";

describe("<TableauDesScores />", () => {
  describe("l'intégration des touches", () => {
    it("crée une touche « 1 fois » lorsque c'est la première fois sur le chiffre", () => {
      const avant = [];
      const apres = integreTouche(20, avant);

      expect(apres).toEqual([{ chiffre: 20, fois: 1 }]);
    });

    it("préserve les autres chiffres déjà touchés", () => {
      const avant = [{ chiffre: 20, fois: 2 }];
      const apres = integreTouche(19, avant);

      expect(apres).toEqual([
        { chiffre: 20, fois: 2 },
        { chiffre: 19, fois: 1 },
      ]);
    });

    it("augmente le nombre de touches si le chiffre est déjà touché", () => {
      const avant = [{ chiffre: 20, fois: 2 }];
      const apres = integreTouche(20, avant);

      expect(apres).toEqual([{ chiffre: 20, fois: 3 }]);
    });
  });
});

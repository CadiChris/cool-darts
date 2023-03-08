const { aplatis, integreTouche } = require("../Cricket.logique");

describe("La logique du Cricket UI />", () => {
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

    it("remplace le premier chiffre par celui touché quand on donne un quatrième chiffre", () => {
      const avant = [
        { chiffre: 20, fois: 1 },
        { chiffre: 19, fois: 1 },
        { chiffre: 18, fois: 1 },
      ];
      const apres = integreTouche(15, avant);

      expect(apres).toEqual([
        { chiffre: 19, fois: 1 },
        { chiffre: 18, fois: 1 },
        { chiffre: 15, fois: 1 },
      ]);
    });
  });

  describe("l'aplatissement des touches", () => {
    it("aplatit un seul chiffre", () => {
      expect(aplatis([{ chiffre: 20, fois: 3 }])).toEqual([20, 20, 20]);
    });

    it("aplatit deux chiffres", () => {
      expect(
        aplatis([
          { chiffre: 20, fois: 3 },
          { chiffre: 18, fois: 2 },
        ])
      ).toEqual([20, 20, 20, 18, 18]);
    });
  });
});

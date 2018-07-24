import Score, { POINTS_INITIAUX } from "./Score";
import Contrats from "./Contrats";

describe("Score", () => {
  it("donne le tableau de score de départ", () => {
    expect(new Score().tableau()).toEqual([
      { contrat: "DEPART", points: POINTS_INITIAUX }
    ]);
  });

  it("fait gagner la valeur du contrat quand ce dernier est rempli", () => {
    const tableauDeTest = [{ contrat: "19", points: 120 }];

    const contratRempli = Contrats.chiffre(20, 3);

    expect(new Score(tableauDeTest).noter(contratRempli).tableau()).toEqual([
      { contrat: "19", points: 120 },
      { contrat: "20", points: 120 + 20 * 3 }
    ]);
  });

  it("divise les points par 2 en cas de contrat non rempli", () => {
    const tableauDeTest = [{ contrat: "17", points: 60 }];

    const contratNonRempli = Contrats.chiffre(18, 0);
    expect(contratNonRempli.estRempli()).toBe(false);

    expect(new Score(tableauDeTest).noter(contratNonRempli).tableau()).toEqual([
      { contrat: "17", points: 60 },
      { contrat: "18", points: 30 }
    ]);
  });

  it("arrondi à l'entier supérieur en cas de division des points, pour ne jamais tomber à 0 points", () => {
    const avecPointsImpairs = [{ contrat: "18", points: 3 }];

    const contratNonRempli = Contrats.chiffre(19, 0);
    expect(contratNonRempli.estRempli()).toBe(false);

    expect(
      new Score(avecPointsImpairs).noter(contratNonRempli).tableau()
    ).toEqual([{ contrat: "18", points: 3 }, { contrat: "19", points: 2 }]);
  });

  it("dit qu'un score est meilleur si son dernier contrat a plus de points", () => {
    const tableauFort = [{ contrat: "BULL", points: 200 }];
    const tableauFaible = [{ contrat: "BULL", points: 70 }];

    expect(
      new Score(tableauFort).estMeilleurQue(new Score(tableauFaible))
    ).toBe(true);
  });
});

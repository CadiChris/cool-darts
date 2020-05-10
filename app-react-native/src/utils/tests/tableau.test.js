import {elementPrecedent, elementSuivant, split} from '../tableau';

describe('élément suivant', () => {
  const joueurs = ['J1', 'J2'];

  it("retourne l'élément suivant en revenant au début après la fin", () => {
    expect(elementSuivant('J1', joueurs)).toBe('J2');
    expect(elementSuivant('J2', joueurs)).toBe('J1');
  });

  it("retour l'élément précédent en repartant à la fin si le début est atteint", () => {
    expect(elementPrecedent('J2', joueurs)).toBe('J1');
    expect(elementPrecedent('J1', joueurs)).toBe('J2');
  });
});

describe('split', () => {
  it('split au milieu un array de longueur paire', () => {
    const deLongueurPaire = [1, 2, 3, 4];

    const morceaux = split(deLongueurPaire);

    expect(morceaux).toEqual({
      premier: [1, 2],
      second: [3, 4],
    });
  });

  it('split après le milieu un array de longueur impaire', () => {
    const deLongueurImpaire = [1, 2, 3];

    const morceaux = split(deLongueurImpaire);

    expect(morceaux).toEqual({
      premier: [1],
      second: [2, 3],
    });
  });
});

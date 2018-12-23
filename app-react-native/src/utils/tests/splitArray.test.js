import { splitArray } from "../splitArray";

describe("split array", () => {
  it("split au milieu un array de longueur paire", () => {
    const deLongueurPaire = [1, 2, 3, 4];

    const split = splitArray(deLongueurPaire);

    expect(split).toEqual({
      premier: [1, 2],
      second: [3, 4]
    });
  });

  it("split après le milieu un array de longueur impaire", () => {
    const deLongueurImpaire = [1, 2, 3];

    const split = splitArray(deLongueurImpaire);

    expect(split).toEqual({
      premier: [1],
      second: [2, 3]
    });
  });
});

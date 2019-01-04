import { POINTS_INITIAUX } from "../../../domaine/arbitrage/Score";
import { avecLesContratsPasEncoreJoues } from "../ColonneJoueur";

describe("<ColonneJoueur />", () => {
  it("construit un tableau des scores complet", () => {
    const contratsDejaJoues = [
      { contrat: "DEPART", points: POINTS_INITIAUX },
      { contrat: "15", points: 20 },
      { contrat: "16", points: 36 },
      { contrat: "DOUBLE", points: 116 }
    ];

    const tableauComplet = avecLesContratsPasEncoreJoues(contratsDejaJoues);

    const contratsAVenir = [
      { contrat: "17", points: undefined, touches: [] },
      { contrat: "18", points: undefined, touches: [] },
      { contrat: "TRIPLE", points: undefined, touches: [] },
      { contrat: "19", points: undefined, touches: [] },
      { contrat: "20", points: undefined, touches: [] },
      { contrat: "25", points: undefined, touches: [] }
    ];

    expect(tableauComplet).toEqual([...contratsDejaJoues, ...contratsAVenir]);
  });
});

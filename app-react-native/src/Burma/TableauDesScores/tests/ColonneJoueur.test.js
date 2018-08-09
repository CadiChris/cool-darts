import { POINTS_INITIAUX } from "../../arbitrage/Score";
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
      { contrat: "17", points: undefined },
      { contrat: "18", points: undefined },
      { contrat: "TRIPLE", points: undefined },
      { contrat: "19", points: undefined },
      { contrat: "20", points: undefined },
      { contrat: "BULL", points: undefined }
    ];

    expect(tableauComplet).toEqual([...contratsDejaJoues, ...contratsAVenir]);
  });
});

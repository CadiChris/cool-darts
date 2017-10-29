import { burma } from "./burma";
import { inscrireJoueur, demarrerPartie, volee } from "./burma.actions";

it("déroule une partie complète", () => {
  const burma1joueur = burma(undefined, inscrireJoueur("J1"));
  const burma2joueurs = burma(burma1joueur, inscrireJoueur("J2"));
  const burmaEnCours = burma(burma2joueurs, demarrerPartie());

  const v_15_j1 = burma(burmaEnCours, volee("J1", 15, 0));
  expect(v_15_j1).toMatchSnapshot();

  const v_15_j2 = burma(v_15_j1, volee("J2", 15, 2));
  expect(v_15_j2).toMatchSnapshot();
});

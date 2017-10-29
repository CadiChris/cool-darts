import { burma } from "./burma";
import { inscrireJoueur, demarrerPartie, volee } from "./burma.actions";

it("déroule une partie complète", () => {
  const burma1joueur = burma(undefined, inscrireJoueur("J1"));
  const burma2joueurs = burma(burma1joueur, inscrireJoueur("J2"));
  const burmaEnCours = burma(burma2joueurs, demarrerPartie());

  derouler(partie).depuis(burmaEnCours);
});

const partie = {
  15: [{ joueur: "J1", touches: 0 }, { joueur: "J2", touches: 2 }],
  16: [{ joueur: "J1", touches: 1 }, { joueur: "J2", touches: 4 }]
};

const derouler = partie => ({
  depuis: etatInitial => {
    let etat = etatInitial;
    for (const chiffre in partie) {
      partie[chiffre].forEach(coup => {
        etat = burma(etat, volee(coup.joueur, chiffre, coup.touches));
        expect(etat).toMatchSnapshot();
      });
    }
  }
});

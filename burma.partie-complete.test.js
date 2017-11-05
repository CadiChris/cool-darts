import { burma } from "./burma";
import {
  inscrireJoueur,
  demarrerPartie,
  voleeChiffree,
  voleeSurDouble
} from "./burma.actions";

it("déroule une partie complète", () => {
  const burma1joueur = burma(undefined, inscrireJoueur("J1"));
  const burma2joueurs = burma(burma1joueur, inscrireJoueur("J2"));
  const burmaEnCours = burma(burma2joueurs, demarrerPartie());

  derouler(partie).depuis(burmaEnCours);
});

// 15   0     -> /2   ->  20 pts      2 -> +30  -> 70 pts
// 16   1     -> +16  ->  36 pts      4 -> +64  -> 134 pts
// D    2x20  -> +40  ->  76 pts      0 -> /2   -> 67 pts
// 17
// 18
// T
// 19
// 20
// B

const partie = [
  voleeChiffree("J1", 15, 0),
  voleeChiffree("J2", 15, 2),
  voleeChiffree("J1", 16, 1),
  voleeChiffree("J2", 16, 4),
  voleeSurDouble("J1", [{ chiffre: 20, nombre: 2 }]),
  voleeSurDouble("J2", [])
];

const derouler = partie => ({
  depuis: etatInitial => {
    let etat = etatInitial;
    partie.forEach(volee => {
      etat = burma(etat, volee);
      expect(etat).toMatchSnapshot();
    });
  }
});

import { burma } from "./burma";
import {
  inscrireJoueur,
  demarrerPartie,
  voleeChiffree,
  voleeSurDouble,
  voleeSurTriple
} from "./actions";

it("déroule une partie complète", () => {
  const burma1joueur = burma(undefined, inscrireJoueur("J1"));
  const burma2joueurs = burma(burma1joueur, inscrireJoueur("J2"));
  const burmaEnCours = burma(burma2joueurs, demarrerPartie());

  derouler(partie).depuis(burmaEnCours);
});

//             == J1 ==           |       == J2 ==
// 15 |  0     -> /2   -> 20 pts  |  2 -> +30  -> 70 pts
// 16 |  1     -> +16  -> 36 pts  |  4 -> +64  -> 134 pts
// D  |  2x20  -> +40  -> 76 pts  |  0 -> /2   -> 67 pts
// 17 |  0     -> /2   -> 38 pts  |  2 -> +34  -> 101 pts
// 18 |  3     -> +54  -> 92 pts  |  1 -> +18  -> 119 pts
// T  |  3x20  -> +60  -> 152 pts |  0 -> /2   -> 60 pts
// 19 |  0     -> /2   -> 76 pts  |  2 -> 38   -> 98 pts
// 20 |  2     -> +40  -> 116 pts |  1 -> +20  -> 118 pts
// B  |  0     -> /2   -> 58 pts  |  2 -> +50  -> 168 pts

const partie = [
  voleeChiffree("J1", 15, 0),
  voleeChiffree("J2", 15, 2),
  voleeChiffree("J1", 16, 1),
  voleeChiffree("J2", 16, 4),
  voleeSurDouble("J1", [{ chiffre: 20, nombre: 2 }]),
  voleeSurDouble("J2", []),
  voleeChiffree("J1", 17, 0),
  voleeChiffree("J2", 17, 2),
  voleeChiffree("J1", 18, 3),
  voleeChiffree("J2", 18, 1),
  voleeSurTriple("J1", [{ chiffre: 20, nombre: 3 }]),
  voleeSurTriple("J2", []),
  voleeChiffree("J1", 19, 0),
  voleeChiffree("J2", 19, 2),
  voleeChiffree("J1", 20, 2),
  voleeChiffree("J2", 20, 1),
  voleeChiffree("J1", "B", 0),
  voleeChiffree("J2", "B", 2)
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

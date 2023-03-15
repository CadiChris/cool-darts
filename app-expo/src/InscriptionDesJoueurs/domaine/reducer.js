import { arrayMoveImmutable } from "array-move";
import {
  CHOISIR_JEU,
  DESINSCRIRE_JOUEUR,
  INSCRIRE_JOUEUR,
  REORDONNER_JOUEUR,
} from "./actions";

const STATE_INITIAL = {
  inscrits: [],
  couleurs: [],
  jeuxDisponibles: ["burma", "cricket"],
  jeuChoisi: "burma",
  laPartiePeutDemarrer: false,
};

function inscriptionDesJoueurs(state = STATE_INITIAL, action) {
  switch (action.type) {
    case INSCRIRE_JOUEUR:
      const nouveau = action.nomDuJoueur;
      const inscritsSansDoublon = [...new Set([...state.inscrits, nouveau])];

      const { couleurs: c } = state;
      const couleurs = state.inscrits.find((i) => i === nouveau)
        ? c
        : [...c, { joueur: nouveau, idCouleur: idCouleurDispo(c) }];

      return {
        ...state,
        inscrits: inscritsSansDoublon,
        couleurs,
        laPartiePeutDemarrer: inscritsSansDoublon.length > 0,
      };

    case REORDONNER_JOUEUR:
      return {
        ...state,
        inscrits: arrayMoveImmutable(
          state.inscrits,
          action.position,
          action.position + action.mouvement
        ),
      };

    case DESINSCRIRE_JOUEUR:
      const sansLeDesinscrit = state.inscrits.filter(
        (inscrit) => inscrit !== action.nomDuJouer
      );
      return {
        ...state,
        inscrits: sansLeDesinscrit,
        couleurs: state.couleurs.filter((c) => c.joueur !== action.nomDuJouer),
        laPartiePeutDemarrer: sansLeDesinscrit.length > 0,
      };

    case CHOISIR_JEU:
      return {
        ...state,
        jeuChoisi: action.jeuChoisi,
      };

    default:
      return state;
  }
}

function idCouleurDispo(couleurs) {
  for (let i = 0; i < CouleursJoueurs.length; i++)
    if (!couleurs.find((c) => c.idCouleur === i)) return i;
}

export const couleurDuJoueur = (state, joueur) =>
  CouleursJoueurs[state.couleurs.find((c) => c.joueur === joueur).idCouleur];

export const couleurDispo = (state) =>
  CouleursJoueurs[idCouleurDispo(state.couleurs)];

export const CouleursJoueurs = [
  { backgroundColor: "#526CE5", color: "#192E90" },
  { backgroundColor: "#E496DE", color: "#A03698" },
  { backgroundColor: "#EF5C80", color: "#6E0D25" },
  { backgroundColor: "#FFEC3C", color: "#79700D" },
  { backgroundColor: "#FF9B11", color: "#6D4814" },
  { backgroundColor: "#5CBAFE", color: "#285D83" },
];

export default inscriptionDesJoueurs;

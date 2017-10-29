import { INSCRIRE_JOUEUR, DEMARRER_PARTIE, VOLEE } from "./burma.actions";
import * as lanceur from "./lanceur";
import { scores } from "./scores";
import { leChiffreSuivant } from "./chiffre";

const burma = (state = STATE_INITIAL, action) => {
  switch (action.type) {
    case INSCRIRE_JOUEUR:
      return {
        ...state,
        joueurs: [...state.joueurs, action.payload.nomDuJoueur],
        scores: scores(state.scores, action)
      };

    case DEMARRER_PARTIE:
      return {
        ...state,
        lanceur: state.joueurs[0],
        scores: scores(state.scores, action),
        phase: "EN_COURS",
        chiffreCourant: 15
      };

    case VOLEE:
      return {
        ...state,
        lanceur: lanceur.suivant(state.joueurs, action.payload.lanceur),
        chiffreCourant: leChiffreSuivant(state.chiffreCourant).avec(
          state.joueurs,
          action.payload.lanceur
        ),
        scores: scores(state.scores, action),
        phase: derniereVolee(
          state.joueurs,
          action.payload.lanceur,
          action.payload.chiffre
        )
          ? "TERMINEE"
          : state.phase
      };

    default:
      return state;
  }
};

const derniereVolee = (tousLesJoueurs, lanceur, chiffre) =>
  tousLesJoueurs.indexOf(lanceur) === tousLesJoueurs.length - 1 &&
  chiffre === "B";

const STATE_INITIAL = {
  joueurs: [],
  scores: scores(undefined, {}),
  phase: "INSCRIPTION",
  lanceur: undefined,
  chiffreCourant: undefined
};

export { burma };

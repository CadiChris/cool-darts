import { INSCRIRE_JOUEUR, DEMARRER_PARTIE, VOLEE } from "./burma.actions";
import { joueurs } from "./joueurs";
import * as lanceur from "./lanceur";
import { phase } from "./phase";
import { scores } from "./scores";
import { chiffreCourant } from "./chiffreCourant";

const burma = (state = STATE_INITIAL, action) => {
  switch (action.type) {
    case INSCRIRE_JOUEUR:
      return {
        ...state,
        joueurs: joueurs(state.joueurs, action),
        scores: scores(state.scores, action)
      };

    case DEMARRER_PARTIE:
      return {
        ...state,
        lanceur: state.joueurs[0],
        scores: scores(state.scores, action),
        phase: phase(state.phase, action),
        chiffreCourant: chiffreCourant(state, action)
      };

    case VOLEE:
      return {
        ...state,
        lanceur: lanceur.suivant(state.joueurs, action.payload.lanceur),
        chiffreCourant: chiffreCourant(state, action),
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
  joueurs: joueurs(undefined, {}),
  scores: scores(undefined, {}),
  phase: phase(undefined, {}),
  lanceur: undefined,
  chiffreCourant: undefined
};

export { burma };

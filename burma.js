import { INSCRIRE_JOUEUR, DEMARRER_PARTIE, VOLEE } from "./actions";
import * as lanceur from "./lanceur";
import { scores } from "./scores";
import { leChiffreSuivant, CHIFFRES_DU_BURMA } from "./chiffre";

const STATE_INITIAL = {
  joueurs: [],
  scores: scores(undefined, {}),
  phase: "INSCRIPTION",
  lanceur: undefined,
  chiffreCourant: undefined,
  vainqueur: undefined
};

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
        chiffreCourant: CHIFFRES_DU_BURMA[0]
      };

    case VOLEE:
      const laPartieSeTermine = derniereVolee(
        state.joueurs,
        action.payload.lanceur,
        action.payload.rang
      );
      return {
        ...state,
        lanceur: lanceur.suivant(state.joueurs, action.payload.lanceur),
        chiffreCourant: leChiffreSuivant(state.chiffreCourant).avec(
          state.joueurs,
          action.payload.lanceur
        ),
        scores: scores(state.scores, action),
        phase: laPartieSeTermine ? "TERMINEE" : state.phase,
        vainqueur: laPartieSeTermine
          ? meilleurScore(state.scores).joueur
          : state.vainqueur
      };

    default:
      return state;
  }
};

const derniereVolee = (tousLesJoueurs, lanceur, chiffre) =>
  tousLesJoueurs.indexOf(lanceur) === tousLesJoueurs.length - 1 &&
  chiffre === "B";

const meilleurScore = scores =>
  scores.reduce(
    (courant, challenger) =>
      courant.points > challenger.points ? courant : challenger,
    scores[0]
  );

export { burma };

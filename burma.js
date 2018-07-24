import { INSCRIRE_JOUEUR, DEMARRER_PARTIE, VOLEE } from "./actions";
import { lanceurSuivant } from "./lanceur";
import { leChiffreSuivant, dernierChiffre, premierChiffre } from "./chiffre";
import Score from "./Score";

const STATE_INITIAL = {
  joueurs: [],
  scores: {},
  phase: "INSCRIPTION",
  lanceur: undefined,
  chiffreCourant: undefined,
  vainqueur: undefined
};

const burma = (state = STATE_INITIAL, action) => {
  switch (action.type) {
    case INSCRIRE_JOUEUR: {
      const { payload: { nomDuJoueur } } = action;

      return {
        ...state,
        joueurs: [...state.joueurs, nomDuJoueur],
        scores: {
          ...state.scores,
          [nomDuJoueur]: new Score().tableau()
        }
      };
    }

    case DEMARRER_PARTIE:
      return {
        ...state,
        lanceur: state.joueurs[0],
        phase: "EN_COURS",
        chiffreCourant: premierChiffre()
      };

    case VOLEE:
      const { payload: { lanceur, contrat } } = action;

      const laPartieSeTermine = estLaDerniereVolee(
        state.joueurs,
        lanceur,
        state.chiffreCourant
      );

      const chiffreSuivant = leChiffreSuivant(state.chiffreCourant).avec(
        state.joueurs,
        lanceur
      );

      const nextScores = {
        ...state.scores,
        [lanceur]: new Score(state.scores[lanceur]).noter(contrat).tableau()
      };

      return {
        ...state,
        lanceur: laPartieSeTermine
          ? undefined
          : lanceurSuivant(lanceur, state.joueurs),
        chiffreCourant: chiffreSuivant,
        scores: nextScores,
        phase: laPartieSeTermine ? "TERMINEE" : state.phase,
        vainqueur: laPartieSeTermine ? meilleurScore(nextScores) : undefined
      };

    default:
      return state;
  }
};

const estLaDerniereVolee = (tousLesJoueurs, lanceur, chiffre) =>
  tousLesJoueurs.indexOf(lanceur) === tousLesJoueurs.length - 1 &&
  chiffre === dernierChiffre();

const meilleurScore = scores =>
  Object.keys(scores).reduce((vainqueur, challenger) => {
    const scoreDuVainqueur = new Score(scores[vainqueur]);
    const scoreDuChallenger = new Score(scores[challenger]);
    if (scoreDuVainqueur.estMeilleurQue(scoreDuChallenger)) return vainqueur;

    return challenger;
  }, Object.keys(scores)[0]);

export { burma };

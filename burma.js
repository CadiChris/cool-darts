import {
  INSCRIRE_JOUEUR,
  DEMARRER_PARTIE,
  VOLEE_SUR_CHIFFRE,
  VOLEE_SUR_DOUBLE,
  VOLEE_SUR_TRIPLE,
  VOLEE_SUR_BULL
} from "./actions";
import { lanceurSuivant } from "./lanceur";
import { leChiffreSuivant, dernierChiffre, premierChiffre } from "./chiffre";
import Score from "./Score";
import Contrats from "./Contrats";

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

    case VOLEE_SUR_CHIFFRE: {
      const { payload: { lanceur, chiffre, nombreDeTouches } } = action;

      return {
        ...state,
        lanceur: lanceurSuivant(lanceur, state.joueurs),
        chiffreCourant: leChiffreSuivant(state.chiffreCourant).avec(
          state.joueurs,
          lanceur
        ),
        scores: {
          ...state.scores,
          [lanceur]: new Score(state.scores[lanceur])
            .noter(new Contrats.chiffre(chiffre, nombreDeTouches))
            .tableau()
        }
      };
    }

    case VOLEE_SUR_DOUBLE: {
      const { payload: { lanceur, chiffresTouches } } = action;

      return {
        ...state,
        lanceur: lanceurSuivant(lanceur, state.joueurs),
        chiffreCourant: leChiffreSuivant(state.chiffreCourant).avec(
          state.joueurs,
          lanceur
        ),
        scores: {
          ...state.scores,
          [lanceur]: new Score(state.scores[lanceur])
            .noter(new Contrats.double(chiffresTouches))
            .tableau()
        }
      };
    }

    case VOLEE_SUR_TRIPLE: {
      const { payload: { lanceur, chiffresTouches } } = action;

      return {
        ...state,
        lanceur: lanceurSuivant(lanceur, state.joueurs),
        chiffreCourant: leChiffreSuivant(state.chiffreCourant).avec(
          state.joueurs,
          lanceur
        ),
        scores: {
          ...state.scores,
          [lanceur]: new Score(state.scores[lanceur])
            .noter(new Contrats.triple(chiffresTouches))
            .tableau()
        }
      };
    }

    case VOLEE_SUR_BULL:
      const {
        payload: { lanceur, nombreDeSimplesBull, nombreDeDoublesBull }
      } = action;

      const laPartieSeTermine = derniereVolee(state.joueurs, lanceur, "BULL");

      const nextScores = {
        ...state.scores,
        [lanceur]: new Score(state.scores[lanceur])
          .noter(new Contrats.bull(nombreDeSimplesBull, nombreDeDoublesBull))
          .tableau()
      };

      return {
        ...state,
        lanceur: laPartieSeTermine
          ? undefined
          : lanceurSuivant(action.payload.lanceur, state.joueurs),
        chiffreCourant: leChiffreSuivant(state.chiffreCourant).avec(
          state.joueurs,
          action.payload.lanceur
        ),
        scores: nextScores,
        phase: laPartieSeTermine ? "TERMINEE" : state.phase,
        vainqueur: laPartieSeTermine ? meilleurScore(nextScores) : undefined
      };

    default:
      return state;
  }
};

const derniereVolee = (tousLesJoueurs, lanceur, chiffre) =>
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

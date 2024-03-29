import { scoreVierge } from "./arbitrage/score";
import { calculerLeNouveauScore } from "./arbitrage/arbitre";
import { vainqueurs } from "./arbitrage/vainqueurs";
import { DEMARRER_CRICKET, VISITER } from "./actions";

const STATE_INITIAL = {
  scores: [],
  vainqueurs: [],
};

export default function partie(state = STATE_INITIAL, action) {
  switch (action.type) {
    case DEMARRER_CRICKET:
      return {
        ...STATE_INITIAL,
        scores: action.joueurs.map(scoreVierge),
      };

    case VISITER:
      const nouveauScore = action.chiffresTouches.reduce((score, chiffre) => {
        return calculerLeNouveauScore(score, {
          lanceur: action.joueur,
          chiffre,
          touches: 1,
        });
      }, state.scores);

      const vainqueursDuNouveauScore = vainqueurs(nouveauScore);

      return {
        ...state,
        scores: nouveauScore,
        vainqueurs: vainqueursDuNouveauScore,
        phase: estTerminee(vainqueursDuNouveauScore) || state.phase,
      };

    default:
      return state;
  }
}

const estTerminee = (vainqueursDuNouveauScore) =>
  vainqueursDuNouveauScore.length > 0 ? "TERMINEE" : null;

export const selectVainqueurs = (state) => state.vainqueurs;

export function joueursEnGroupe(state) {
  const nbJoueurs = state.scores.length;
  const milieu = Math.ceil(nbJoueurs / 2);
  const joueurs = state.scores.map((s) => s.joueur);
  return [joueurs.splice(0, milieu), joueurs.splice(-milieu)];
}

export function scoreDuJoueur(state, joueur) {
  return state.scores.find((s) => s.joueur === joueur);
}

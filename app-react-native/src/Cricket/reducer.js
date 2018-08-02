import { scoreVierge } from "./arbitrage/score";
import { calculerLeNouveauScore } from "./arbitrage/arbitre";
import { vainqueurs } from "./arbitrage/vainqueurs";

const STATE_INITIAL = {
  scores: [],
  vainqueurs: []
};

export default function partie(state = STATE_INITIAL, action) {
  switch (action.type) {
    case "DEMARRER_PARTIE":
      return {
        ...STATE_INITIAL,
        scores: action.joueurs.map(scoreVierge)
      };

    case "LANCER_FLECHETTE":
      const lancer = {
        lanceur: action.joueur,
        chiffre: action.chiffre,
        touches: action.touches
      };
      const nouveauScore = calculerLeNouveauScore(state.scores, lancer);
      const vainqueursDuNouveauScore = vainqueurs(nouveauScore);

      return {
        ...state,
        scores: nouveauScore,
        vainqueurs: vainqueursDuNouveauScore,
        phase: vainqueursDuNouveauScore.length > 0 ? "TERMINEE" : state.phase
      };

    default:
      return state;
  }
}

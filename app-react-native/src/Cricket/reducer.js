import { scoreVierge } from "./arbitrage/score";
import { calculerLeNouveauScore } from "./arbitrage/arbitre";
import { vainqueurs } from "./arbitrage/vainqueurs";
import { DEMARRER_CRICKET, LANCER_FLECHETTE } from "./actions";

const STATE_INITIAL = {
  scores: [],
  vainqueurs: []
};

export default function partie(state = STATE_INITIAL, action) {
  switch (action.type) {
    case DEMARRER_CRICKET:
      return {
        ...STATE_INITIAL,
        scores: action.joueurs.map(scoreVierge)
      };

    case LANCER_FLECHETTE:
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

import { DESINSCRIRE_JOUEUR, INSCRIRE_JOUEUR } from "./actions";

const STATE_INITIAL = {
  inscrits: [],
  laPartiePeutDemarrer: false
};

function inscriptionDesJoueurs(state = STATE_INITIAL, action) {
  switch (action.type) {
    case INSCRIRE_JOUEUR:
      const inscritsSansDoublon = [
        ...new Set([...state.inscrits, action.nomDuJoueur])
      ];
      return {
        ...state,
        inscrits: inscritsSansDoublon,
        laPartiePeutDemarrer: inscritsSansDoublon.length > 1
      };

    case DESINSCRIRE_JOUEUR:
      const sansLeDesinscrit = state.inscrits.filter(
        inscrit => inscrit !== action.nomDuJouer
      );
      return {
        ...state,
        inscrits: sansLeDesinscrit,
        laPartiePeutDemarrer: sansLeDesinscrit.length > 1
      };

    default:
      return state;
  }
}

export default inscriptionDesJoueurs;

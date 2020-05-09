import arrayMove from 'array-move';
import {
  CHOISIR_JEU,
  DESINSCRIRE_JOUEUR,
  INSCRIRE_JOUEUR,
  REORDONNER_JOUEUR,
} from './actions';

const STATE_INITIAL = {
  inscrits: [],
  jeuxDisponibles: ['burma', 'cricket'],
  jeuChoisi: 'burma',
  laPartiePeutDemarrer: false,
};

function inscriptionDesJoueurs(state = STATE_INITIAL, action) {
  switch (action.type) {
    case INSCRIRE_JOUEUR:
      const inscritsSansDoublon = [
        ...new Set([...state.inscrits, action.nomDuJoueur]),
      ];
      return {
        ...state,
        inscrits: inscritsSansDoublon,
        laPartiePeutDemarrer: inscritsSansDoublon.length > 0,
      };

    case REORDONNER_JOUEUR:
      return {
        ...state,
        inscrits: arrayMove(
          state.inscrits,
          action.position,
          action.position + action.mouvement,
        ),
      };

    case DESINSCRIRE_JOUEUR:
      const sansLeDesinscrit = state.inscrits.filter(
        inscrit => inscrit !== action.nomDuJouer,
      );
      return {
        ...state,
        inscrits: sansLeDesinscrit,
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

export default inscriptionDesJoueurs;

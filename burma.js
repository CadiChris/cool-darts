import { INSCRIRE_JOUEUR, DEMARRER_PARTIE, VOLEE } from "./burma.actions";

const burma = (state = STATE_INITIAL, action) => {
  switch (action.type) {
    case INSCRIRE_JOUEUR:
      return {
        ...state,
        joueurs: [...state.joueurs, action.payload.nomDuJoueur]
      }

    case DEMARRER_PARTIE:
      return {
        ...state,
        lanceur: state.joueurs[0],
        scores: state.joueurs.map(scoreVierge),
        phase: 'EN_COURS',
        chiffreCourant: 15
      }

    case VOLEE:
      const prochainLanceur = state.joueurs[(state.joueurs.indexOf(state.lanceur) + 1) % state.joueurs.length];
      const changementDeChiffre = prochainLanceur === state.joueurs[0]
      return {
        ...state,
        scores: [
          ...state.scores.map((s) =>
              noterUneVolee(state.chiffreCourant, action.payload.nombreDeTouches, s, state.lanceur))
        ],
        lanceur: prochainLanceur,
        chiffreCourant: changementDeChiffre ? CHIFFRES_DU_BURMA[CHIFFRES_DU_BURMA.indexOf(state.chiffreCourant) + 1] : state.chiffreCourant
      }

    default:
      return state
  }
}

const STATE_INITIAL = {
  joueurs: [],
  lanceur: undefined,
  scores: [],
  phase: "INSCRIPTION"
}

const POINTS_INITIAUX = 40;
const scoreVierge = (joueur) => ({
  joueur,
  points: POINTS_INITIAUX,
  touches: {}
})

const noterUneVolee = (chiffre, nombreDeTouches, score, lanceur) => {
  const joueurNonConcerne = score.joueur !== lanceur
  if (joueurNonConcerne)
    return { ...score }

  if (nombreDeTouches !== 0)
    return {
      ...score,
      points: score.points + chiffre * nombreDeTouches,
      touches: {
        ...score.touches,
        [chiffre]: nombreDeTouches
      }
    }
}

const CHIFFRES_DU_BURMA = [15, 16, 'D', 17, 18, 'T', 19, 20, 'B']

export {
  burma
}
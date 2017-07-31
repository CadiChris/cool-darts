import { DEMARRER_PARTIE, VOLEE } from "./burma.actions";

function scores(state = [], action) {
  switch (action.type) {

    case DEMARRER_PARTIE:
      return state.joueurs.map(scoreVierge)

    case VOLEE:
      return state.scores.map((s) =>
          noterUneVolee(state.chiffreCourant, action.payload.nombreDeTouches, s, state.lanceur))

    default:
      return state
  }
}

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


const POINTS_INITIAUX = 40;

export {
  scores
}
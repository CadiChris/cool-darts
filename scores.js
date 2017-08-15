import { VOLEE, INSCRIRE_JOUEUR } from "./burma.actions";

function scores(state = [], action) {
  switch (action.type) {

    case  INSCRIRE_JOUEUR :
      return [
        ...state,
        scoreVierge(action.payload.nomDuJoueur)
      ]

    case VOLEE:
      return state.map((s) =>
          noterUneVolee(action.payload.chiffre, action.payload.nombreDeTouches, s, action.payload.lanceur))

    default:
      return state
  }
}

const scoreVierge = (joueur) => ({
  joueur,
  points: POINTS_INITIAUX,
  touches: {}
})
const POINTS_INITIAUX = 40;

const noterUneVolee = (chiffre, nombreDeTouches, score, lanceur) => {
  const joueurNonConcerne = score.joueur !== lanceur
  if (joueurNonConcerne)
    return { ...score }

  return {
    ...score,
    points: nombreDeTouches !== 0
        ? score.points + chiffre * nombreDeTouches
        : Math.round(score.points / 2),
    touches: {
      ...score.touches,
      [chiffre]: nombreDeTouches
    }
  }
}


export {
  scores
}
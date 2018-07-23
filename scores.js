import { VOLEE, INSCRIRE_JOUEUR } from "./actions";

function scores(state = [], action) {
  switch (action.type) {
    case INSCRIRE_JOUEUR:
      return [...state, scoreVierge(action.payload.nomDuJoueur)];

    case VOLEE:
      return state.map(s =>
        noterUneVolee(
          action.payload.rang,
          action.payload.touches,
          s,
          action.payload.lanceur
        )
      );

    default:
      return state;
  }
}

const scoreVierge = joueur => ({
  joueur,
  points: POINTS_INITIAUX,
  touches: {}
});
const POINTS_INITIAUX = 40;

const noterUneVolee = (chiffre, touches, score, lanceur) => {
  const joueurNonConcerne = score.joueur !== lanceur;
  if (joueurNonConcerne) return { ...score };

  return {
    ...score,
    points:
      totalDesPoints(touches) !== 0
        ? score.points + totalDesPoints(touches)
        : Math.round(score.points / 2),
    touches: {
      ...score.touches,
      [chiffre]: touches
    }
  };
};

export { scores, POINTS_INITIAUX };

const totalDesPoints = touches =>
  touches.reduce(
    (cumul, volee) =>
      cumul + (volee.chiffre === "B" ? 25 : volee.chiffre) * volee.nombre,
    0
  );

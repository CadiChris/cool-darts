export function scoreVierge(joueur) {
  return {
    joueur,
    penalite: 0,
    cible: {
      15: { touches: 0, ferme: false },
      16: { touches: 0, ferme: false },
      17: { touches: 0, ferme: false },
      18: { touches: 0, ferme: false },
      19: { touches: 0, ferme: false },
      20: { touches: 0, ferme: false },
      25: { touches: 0, ferme: false },
    },
  };
}

const LIMITE = 3;

export function toucher(chiffre, touches, score) {
  const touchesActuelles = score.cible[chiffre].touches;
  const nouvellesTouches = Math.min(touchesActuelles + touches, LIMITE);

  return {
    ...score,
    cible: {
      ...score.cible,
      [chiffre]: {
        touches: nouvellesTouches,
        ferme: nouvellesTouches >= LIMITE,
      },
    },
  };
}

export function penaliser(pointsDePenalite, score) {
  return {
    ...score,
    penalite: score.penalite + pointsDePenalite,
  };
}

export function chiffreEstFerme(chiffre, score) {
  return score.cible[chiffre].ferme;
}

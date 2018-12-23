export const DEMARRER_CRICKET = "CRICKET/DEMARRER";
export const demarrerCricket = joueurs => ({
  type: DEMARRER_CRICKET,
  joueurs
});

export const LANCER_FLECHETTE = "CRICKET/LANCER_FLECHETTE";
export const lancerFlechette = (joueur, chiffre, touches) => ({
  type: LANCER_FLECHETTE,
  joueur,
  chiffre,
  touches
});

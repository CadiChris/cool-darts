export const demarrerPartie = joueurs => ({
  type: "DEMARRER_PARTIE",
  joueurs
});

export const lancerFlechette = (joueur, chiffre, touches) => ({
  type: "LANCER_FLECHETTE",
  joueur,
  chiffre,
  touches
});

export const nouvellePartie = () => ({
  type: "NOUVELLE_PARTIE"
});

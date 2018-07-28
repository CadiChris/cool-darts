export const inscrireJoueur = joueur => ({
  type: "INSCRIRE_JOUEUR",
  joueur
});

export const demarrerPartie = () => ({
  type: "DEMARRER_PARTIE"
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

export function inscrireJoueur(joueur) {
  return {
    type: "INSCRIRE_JOUEUR",
    joueur
  };
}

export function demarrerPartie() {
  return { type: "DEMARRER_PARTIE" };
}

export function lancerFlechette(joueur, chiffre, touches) {
  return {
    type: "LANCER_FLECHETTE",
    joueur,
    chiffre,
    touches
  };
}

export const nouvellePartie = () => ({
  type: "NOUVELLE_PARTIE"
});

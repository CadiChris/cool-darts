export const INSCRIRE_JOUEUR = "INSCRIRE_JOUEUR";
export const inscrireJoueur = nomDuJoueur => ({
  type: INSCRIRE_JOUEUR,
  nomDuJoueur
});

export const DESINSCRIRE_JOUEUR = "DESINSCRIRE_JOUEUR";
export const desinscrireJoueur = nomDuJouer => ({
  type: DESINSCRIRE_JOUEUR,
  nomDuJouer
});

export const CHOISIR_JEU = "CHOISIR_JEU";
export const choisirJeu = jeuChoisi => ({
  type: CHOISIR_JEU,
  jeuChoisi
});

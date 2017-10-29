import { DEMARRER_PARTIE, VOLEE } from "./burma.actions";

function lanceur(burma, action) {
  switch (action.type) {
    case DEMARRER_PARTIE:
      return burma.joueurs[0];

    case VOLEE:
      const nombreDeJoueurs = burma.joueurs.length;
      const indexDuLanceur = burma.joueurs.indexOf(burma.lanceur);
      const prochainLanceur =
        burma.joueurs[(indexDuLanceur + 1) % nombreDeJoueurs];
      return prochainLanceur;
  }
}

export { lanceur };

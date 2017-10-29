import * as lanceur from "./lanceur";

const prochainChiffre = (chiffreCourant, tousLesJoueurs, leLanceur) => {
  const prochainLanceur = lanceur.suivant(tousLesJoueurs, leLanceur);
  const finDuTour = prochainLanceur === tousLesJoueurs[0];

  return finDuTour ? chiffreQuiSuit(chiffreCourant) : chiffreCourant;
};

const chiffreQuiSuit = chiffreCourant =>
  CHIFFRES_DU_BURMA[CHIFFRES_DU_BURMA.indexOf(chiffreCourant) + 1];

export { prochainChiffre };

const CHIFFRES_DU_BURMA = [15, 16, "D", 17, 18, "T", 19, 20, "B"];

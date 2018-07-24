import * as lanceur from "./lanceur";

const CHIFFRES_DU_BURMA = ["15", "16", "D", "17", "18", "T", "19", "20", "B"];

const leChiffreSuivant = chiffre => ({
  avec: (lesJoueurs, leLanceur) => {
    const prochainLanceur = lanceur.lanceurSuivant(leLanceur, lesJoueurs);
    const finDuTour = prochainLanceur === lesJoueurs[0];
    return finDuTour ? chiffreQuiSuit(chiffre) : chiffre;
  }
});

const chiffreQuiSuit = chiffreCourant =>
  CHIFFRES_DU_BURMA[CHIFFRES_DU_BURMA.indexOf(chiffreCourant) + 1];

export { leChiffreSuivant, CHIFFRES_DU_BURMA };

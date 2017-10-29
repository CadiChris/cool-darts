import * as lanceur from "./lanceur";

const chiffreQuiSuit = chiffreCourant =>
  CHIFFRES_DU_BURMA[CHIFFRES_DU_BURMA.indexOf(chiffreCourant) + 1];

const leChiffreSuivant = chiffre => ({
  avec: (lesJoueurs, leLanceur) => {
    const prochainLanceur = lanceur.suivant(lesJoueurs, leLanceur);
    const finDuTour = prochainLanceur === lesJoueurs[0];
    return finDuTour ? chiffreQuiSuit(chiffre) : chiffre;
  }
});

export { leChiffreSuivant };

const CHIFFRES_DU_BURMA = [15, 16, "D", 17, 18, "T", 19, 20, "B"];

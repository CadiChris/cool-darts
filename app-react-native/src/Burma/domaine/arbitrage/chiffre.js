import { elementSuivant } from "../../../utils/tableau";

const BULL = "25";
const CHIFFRES_DU_BURMA = [
  "15",
  "16",
  "DOUBLE",
  "17",
  "18",
  "TRIPLE",
  "19",
  "20",
  BULL
];

const premierChiffre = () => CHIFFRES_DU_BURMA[0];
const dernierChiffre = () => CHIFFRES_DU_BURMA[CHIFFRES_DU_BURMA.length - 1];

const leChiffreSuivant = chiffre => ({
  avec: (lesJoueurs, leLanceur) => {
    const prochainLanceur = elementSuivant(leLanceur, lesJoueurs);
    const finDuTour = prochainLanceur === lesJoueurs[0];
    return finDuTour ? chiffreQuiSuit(chiffre) : chiffre;
  }
});

const chiffreQuiSuit = chiffreCourant =>
  CHIFFRES_DU_BURMA[CHIFFRES_DU_BURMA.indexOf(chiffreCourant) + 1];

export {
  premierChiffre,
  dernierChiffre,
  leChiffreSuivant,
  BULL,
  CHIFFRES_DU_BURMA
};

import Contrats from "./arbitrage/Contrats";

export const DEMARRER_PARTIE = "DEMARRER_PARTIE";
export const demarrerPartie = joueurs => ({
  type: DEMARRER_PARTIE,
  joueurs
});

export const VOLEE = "VOLEE";
export const voleeSurChiffre = (lanceur, chiffre, nombreDeTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.chiffre(chiffre, nombreDeTouches)
  }
});

export const voleeSurDouble = (lanceur, chiffresTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.double(chiffresTouches)
  }
});

export const voleeSurTriple = (lanceur, chiffresTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.triple(chiffresTouches)
  }
});

export const voleeSurBull = (lanceur, nombreDeBulls) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.bull(nombreDeBulls)
  }
});

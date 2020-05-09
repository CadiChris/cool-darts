import Contrats from './arbitrage/Contrats';

export const DEMARRER_BURMA = 'BURMA/DEMARRER';
export const demarrerBurma = joueurs => ({
  type: DEMARRER_BURMA,
  joueurs,
});

export const VOLEE = 'BURMA/VOLEE';
export const voleeSurChiffre = (lanceur, chiffre, nombreDeTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.chiffre(chiffre, nombreDeTouches),
  },
});

export const voleeSurDouble = (lanceur, chiffresTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.double(chiffresTouches),
  },
});

export const voleeSurTriple = (lanceur, chiffresTouches) => ({
  type: VOLEE,
  payload: {
    lanceur,
    contrat: new Contrats.triple(chiffresTouches),
  },
});
